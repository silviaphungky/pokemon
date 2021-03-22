import React, { 
  useEffect, 
  useState 
} from 'react'
import { 
  Layout, 
  Text
} from 'components'
import { 
  Grid, 
  PokedexCard
} from './styles'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { PokemonName } from 'domains/pokemon-detail/styles'
import { MyPokemonCard, MyPokemonListEmpty } from './components'

const MyPokemonListDomain = () => {

  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    handleFetchMyPokeList()
  }, [])

  const handleFetchMyPokeList = () => {
    const myPokeListStorage = localStorage.getItem('myPokeList')
    if(myPokeListStorage) {
      setPokemonList([...JSON.parse(myPokeListStorage)])
    }
  }

  const handleRemovePoke = (name) => {
    const updatedPoke = pokemonList.filter((element) => element.name !== name)
    if(updatedPoke.length > 0) {
      localStorage.setItem('myPokeList', JSON.stringify(updatedPoke))
    }
    else {
      localStorage.removeItem('myPokeList')
    }
    handleFetchMyPokeList()
    toast(`${name} was relaesed`)
  }

  return(
    <>
      <PokemonName>
        <Text
          bold
          fontSize='1.5rem'
          fontSizeMobile='1rem'
        >
          POKEDEX
        </Text>
      </PokemonName>
      <PokedexCard>
        {
          pokemonList.length > 0
            ? (
              <Layout>
                <Grid>
                  {
                    pokemonList.map((poke) => (
                      <MyPokemonCard 
                        key={ poke.name }
                        poke={ poke }
                        handleRemovePoke={ handleRemovePoke }
                      />
                    ))
                  }
                </Grid>
                <ToastContainer 
                  position="bottom-right"
                  autoClose={ 3000 }
                  hideProgressBar={ true }
                  newestOnTop={ false }
                  closeOnClick
                  rtl={ false }
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
              </Layout>
            )
            : <MyPokemonListEmpty />
        }_
      </PokedexCard>
    </>
  )
}

export default MyPokemonListDomain
