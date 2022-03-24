<template>
  <h1 v-if="!pokemon">Capturando a los pokemons..</h1>

  <div v-else>
    <h1>¿Quien es este pokemon?</h1>
    <PokemonPicture :PokemonId="pokemon.id" :showPokemon="showAnswer" />
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer" />
    <template v-if="showAnswer">
      <h2>{{ message }}</h2>
      <button @click="newGame">nuevo juego</button>
    </template>
  </div>
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions";
import PokemonPicture from "@/components/PokemonPicture";

import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showAnswer: false,
      message: "",
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();

      const rndInt = Math.floor(Math.random() * 4);

      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(PokemonId) {
      this.showAnswer = true;
      if (PokemonId === this.pokemon.id) {
        this.message = `Correcto, ${this.pokemon.name}`;
      } else {
        this.message = `Oops, era ${this.pokemon.name}`;
      }
    },
    newGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonArr = [];
      this.pokemon = null;
      this.mixPokemonArray();
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
  components: {
    PokemonOptions,
    PokemonPicture,
  },
};
</script>

<style scoped>
</style>
