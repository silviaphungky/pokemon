import axios from 'axios'

const baseUrl = 'https://pokeapi.co/api/v2'

const PokemonApi = {
  getPokemonDetail: async (pokemonName) => {
    const pokemonDetailUrl  = `${baseUrl}/pokemon/${pokemonName}`
    const response = await axios.get(pokemonDetailUrl)
    return response
  }
}

export default PokemonApi
