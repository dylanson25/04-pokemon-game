<template>
<h1 v-if="!pokemon">Capturando a los pokemons..</h1>

<div v-else>
    <h1>¿Quien es este pokemon?</h1>
    <PokemonPicture :PokemonId="pokemon.id" :showPokemon="false"/>
    <PokemonOptions  :pokemons="pokemonArr"/>
</div>

</template>

<script>

import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
data(){
  return{
    pokemonArr: [],
    pokemon: null
  }
},
methods:{
  async mixPokemonArray(){
    this.pokemonArr = await getPokemonOptions()

    const rndInt = Math.floor( Math.random() * 4 )

    this.pokemon = this.pokemonArr[ rndInt ]
  },
  
},
mounted(){
  this.mixPokemonArray()
},
components: {
    PokemonOptions,
    PokemonPicture
  }
}
</script>

<style scoped>

</style>
