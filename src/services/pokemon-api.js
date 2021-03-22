import axios from 'axios'

const baseUrl = 'https://pokeapi.co/api/v2'

const PokemonApi = {
  getPokemonDetail: async (pokemonCode) => {
    const pokemonDetailUrl  = `${baseUrl}/pokemon/${pokemonCode}`
    const response = await axios.get(pokemonDetailUrl)
    return response
  }
}

export default PokemonApi
