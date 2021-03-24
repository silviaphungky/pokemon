import React, { useCallback, useEffect, useState } from 'react'
import { Loading, MenuBar, Text } from 'components'
import PokemonApi from 'services/pokemon-api'
import { PokemonDetailDesktop, PokemonDetailFormModal, PokemonDetailMobile } from './components'
import { PokemonName } from './styles'
import { useHistory } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { secondary } from 'components/color-mapping'
import PropTypes from 'proptypes'

const propTypes = {
  props: PropTypes.shape({
    match: PropTypes.shape({
      params: PropTypes.object
    })
  })
}

const defaultProps = {
  props: {
    match: {
      params: {}
    }
  }
}

const PokemonDetailDomain = ({ props }) => {

  const [detail, setDetail] = useState({})
  const [caughtPoke, setCaughtPoke] = useState({})
  const [myPokeList, setMyPokeList] = useState([])
  const [previewImg, setPreviewImg] = useState('')

  const [isLoading, setIsLoading] = useState(true)
  const [isCatching, setIsCatching] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)

  const [isError, setIsError] = useState('')

  const history = useHistory()

  const { pokemonName } = props.match.params

  const fetchPokemonDetail = useCallback(() => {

    PokemonApi.getPokemonDetail(pokemonName)
      .then((response) => {
        const data = response.data
        setDetail(data)
        setPreviewImg(data.sprites.front_default)
        setIsLoading(false)
      })
      .catch((error) => {
        if(error.response.status === 404) {
          history.push('/404')
        }
        else alert(error.response.message)
      })
  }, [history, pokemonName])


  const getStorage = () => {
    const myPokeStorage = localStorage.getItem('myPokeList')
    const initialmyPokeList = myPokeStorage? JSON.parse(myPokeStorage) : []
    setMyPokeList([...initialmyPokeList])
  } 

  useEffect(() => {

    const bodyElt = document.querySelector('body')
    bodyElt.style.background = secondary

    fetchPokemonDetail()
    getStorage()

  }, [fetchPokemonDetail, history, pokemonName])

  const handleClickPokeBall = () => {
    if(!isCatching) {
      setIsCatching(true)
      setTimeout(() => {
        const isSucces = Math.random() <= 0.5
        if(isSucces) {
          caughtPoke.image = detail.sprites.front_default
          caughtPoke.mainTypes = detail.types[0].type.name
          caughtPoke.date = new Date()
          caughtPoke.stats = detail.stats
          caughtPoke.speciesName = detail.name
          caughtPoke.sprites = detail.sprites
          setCaughtPoke({ ...caughtPoke })
        }
        setIsOpenModal(isSucces)
        setIsCatching(false)
      }, 1500)
    }
  }

  const handleAddToMyPokeList = () => {
    if(myPokeList.length > 0 && caughtPoke.name) {
      const isDuplicate = myPokeList.find((poke) => (poke.name).toLowerCase() === caughtPoke.name.toLowerCase())
      if(isDuplicate) {
        setIsError('Nickname already exists')
      }
      else {
        getStorage()
        const updatedMyPokeList = [...myPokeList, caughtPoke]
        localStorage.setItem('myPokeList', JSON.stringify(updatedMyPokeList))
        setIsOpenModal(false)
        toast(`${caughtPoke.name} has been added to Pokedex`)
        setCaughtPoke({})
      }
    }
    else if(myPokeList.length === 0 && caughtPoke.name){
      getStorage()
      const updatedMyPokeList = [...myPokeList, caughtPoke]
      localStorage.setItem('myPokeList', JSON.stringify(updatedMyPokeList))
      setIsOpenModal(false)
      setCaughtPoke({})
      toast(`${caughtPoke.name} has been added to Pokedex`)
    }
    else setIsError('Please enter a nickname')
  }

  return(
    isLoading
      ? <Loading />
      : (
        <>
          { console.log('caugh', caughtPoke) }
          <PokemonName>
            <Text
              bold
              textTransform='uppercase'
              fontSize='1.5rem'
              fontSizeMobile='1rem'
            >
              { detail.name }
            </Text>
          </PokemonName>
          <PokemonDetailMobile 
            detail={ detail }
            isCatching={ isCatching }
            previewImg={ previewImg }
            setPreviewImg={ setPreviewImg }
            handleClickPokeBall={ handleClickPokeBall }
          />

          <PokemonDetailDesktop 
            detail={ detail }
            isCatching={ isCatching }
            previewImg={ previewImg }
            setPreviewImg={ setPreviewImg }
            handleClickPokeBall={ handleClickPokeBall }
          />

          <PokemonDetailFormModal 
            isOpenModal={ isOpenModal }
            detail={ detail }
            caughtPoke={ caughtPoke }
            setIsOpenModal={ setIsOpenModal }
            isError={ isError }
            setCaughtPoke={ setCaughtPoke }
            handleAddToMyPokeList={ handleAddToMyPokeList }
          />

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

          <MenuBar 
            isCatching={ isCatching }
            handleClickPokeBall={ handleClickPokeBall }
          />
        </>
      )
              
  )
}

PokemonDetailDomain.propTypes = propTypes
PokemonDetailDomain.defaultProps = defaultProps

export default PokemonDetailDomain
