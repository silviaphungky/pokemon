import React, { 
  useEffect, 
  useState 
} from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { 
  Layout, 
  Text
} from 'components'
import { 
  MyPokemonListCard, 
  MyPokemonListEmpty, 
  MyPokemonListReleaseConfirmation
} from './components'
import { 
  Grid, 
  PokedexCard
} from './styles'
import { PokemonName } from 'domains/pokemon-detail/styles'

const MyPokemonListDomain = () => {

  const [pokemonList, setPokemonList] = useState([])
  const [selectedPoke, setSelectedPoke] = useState({})
  const [isOpenConfirmation, setIsOpenConfirmation] = useState(false)

  useEffect(() => {
    handleFetchMyPokeList()
  }, [])

  const handleFetchMyPokeList = () => {
    const myPokeListStorage = localStorage.getItem('myPokeList')
    if(myPokeListStorage) {
      setPokemonList([...JSON.parse(myPokeListStorage)])
    }
    else setPokemonList([])
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
    setIsOpenConfirmation(false)
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
              <>
                <Grid>
                  {
                    pokemonList.map((poke) => (
                      <>
                        <MyPokemonListCard 
                          key={ poke.name }
                          poke={ poke }
                          setSelectedPoke={ setSelectedPoke }
                          setIsOpenConfirmation={ setIsOpenConfirmation }
                        />
                      </>
                    ))
                  }
                </Grid>
                <ToastContainer 
                  position="top-right"
                  autoClose={ 3000 }
                  hideProgressBar={ true }
                  newestOnTop={ false }
                  closeOnClick
                  rtl={ false }
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
              </>
            )
            : <MyPokemonListEmpty />
        }_
      </PokedexCard>
      <MyPokemonListReleaseConfirmation 
        selectedPoke={ selectedPoke }
        isOpenConfirmationModal={ isOpenConfirmation } 
        setIsOpenConfirmationModal={ setIsOpenConfirmation } 
        handleRemovePoke={ handleRemovePoke }
      />
    </>
  )
}

export default MyPokemonListDomain
