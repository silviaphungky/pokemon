import gql from 'graphql-tag'

const PokeonGraphql = {
  getPokemonList: gql`
    query pokemons($limit: Int, $offset: Int) {
      pokemons(limit: $limit, offset: $offset) {
        count
        next
        previous
        nextOffset
        prevOffset
        status
        message
        results {
          url
          name
          image
        }
      }
    }
  `,
  getPokemonDetail: gql`
    query pokemon($name: String!) {
      pokemon(name: $name) {
        id
        name
        sprites {
          front_default
        }
        moves {
          move {
            name
          }
        }
        types {
          type {
            name
          }
        }
      }
    }
  `
}

export default PokeonGraphql
