<template>
    <h1>¿Quien es este pokemon?</h1>
    <PokemonPicture  :PokemonId="4" :showPokemon="true"/>
    <PokemonOptions />
</template>

<script>

import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'

import getPokemonOptions from '@/helpers/getPokemonOptions'

getPokemonOptions()
export default {
components: {
    PokemonOptions,
    PokemonPicture
  }
}
</script>

<style scoped>

</style>
