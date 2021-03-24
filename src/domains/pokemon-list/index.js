import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { 
  Button, 
  Text,
  Layout,
  Loading  
} from 'components'
import { PokemonListPagination } from './components'
import { 
  Grid, 
  HeaderImg,
  HeaderImgWrapper,
  Img,
  PokemonCard,
  PokemonListCard
} from './styles'
import PokeonGraphql from 'graphql/pokemon-graphql'
import { 
  primary, 
  secondary 
} from 'components/color-mapping'

const PokemonListDomain = () => {

  const [offset, setOffset] = useState(1) 
  const limit = 20

  const { 
    data: { pokemons = [] } = {},
    loading
  } = useQuery(PokeonGraphql.getPokemonList, {
    variables: {
      limit  : limit,
      offset : offset
    }
  })

  return(
    <>
      <HeaderImgWrapper>
        <HeaderImg 
          src='/header.png' 
          alt='pokemon header'
        />
      </HeaderImgWrapper>

      <PokemonListCard>
        <PokemonListPagination 
          loading={ loading }
          pokemons={ pokemons }
          offset={ offset }
          limit={ limit }
          setOffset={ setOffset }
        />
        {
          loading
            ? <Loading />
            : (
              <Layout>
                <Grid>
                  {
                    pokemons.results.map((pokemon) => (
                      <Link
                        to={ `/pokemon/${pokemon.name}` }
                        key={ pokemon.name }
                      >
                        <PokemonCard>
                          <Img 
                            src={ pokemon.image } 
                            alt={ pokemon.name }
                          />
                          <Text
                            bold
                            textAlign='center'
                            textTransform='uppercase'
                          >
                            { pokemon.name }
                          </Text>
                          <Button
                            arial-label='detail'
                            color={ secondary }
                            width='100%'
                            margin='1rem 0 0'
                          >
                            <Text 
                              color={ primary }
                              bold
                            >
                              detail
                            </Text>
                          </Button>
                        </PokemonCard>
                      </Link>
                    ))
                  }
                </Grid>
              </Layout>
            )
        }
        
        <PokemonListPagination 
          loading={ loading }
          pokemons={ pokemons }
          offset={ offset }
          limit={ limit }
          setOffset={ setOffset }
        />
      </PokemonListCard>
    </>
  )
}

export default PokemonListDomain
