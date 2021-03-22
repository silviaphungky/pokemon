import { useEffect, useState } from "react"
import PokemonApi from "../services/pokemon-api"
import Link from 'next/link'
import Router from 'next/router'

const PokemonListPage = () => {

  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    PokemonApi.getPokemonList()
    .then((response) => {
      const data = response.data.results
      setPokemonList(data)
    })
    .catch((error) => {
      alert('something went wrong went fetching data')
      console.log(error)
    })
  }, [])

return(
  <div>
    <h3>
      pokemon list page
    </h3>
    {
      pokemonList.map((pokemon) => {

        const pokemonCode = pokemon.url.split('https://pokeapi.co/api/v2/pokemon/').pop()

        return(
        <div key={pokemon.name}>
          <Link 
            href={`/pokemon/[codeSlug]`}
            as= {`/pokemon/${pokemonCode}`}
          >
            <a>
              {pokemon.name}
            </a>
          </Link>
        </div>
      )}
      )
    }
  </div>
)
}

export default PokemonListPage
