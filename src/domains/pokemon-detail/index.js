import React, { useEffect, useState } from 'react'
import { Loading, MenuBar, Text } from 'components'
import PokemonApi from 'services/pokemon-api'
import { PokemonDetailDesktop, PokemonDetailFormModal, PokemonDetailMobile } from './components'
import { PokemonName } from './styles'

const PokemonDetailDomain = ({ props }) => {

  const [detail, setDetail] = useState({})
  const [caughtPoke, setCaughtPoke] = useState({})
  const [myPokeList, setMyPokeList] = useState([])
  const [previewImg, setPreviewImg] = useState('')

  const [isLoading, setIsLoading] = useState(true)
  const [isCatching, setIsCatching] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)

  const [isError, setIsError] = useState('')

  useEffect(() => {
    const bodyElt = document.querySelector('body')
    bodyElt.style.background = 'orange'

    const { pokemonName } = props.match.params

    PokemonApi.getPokemonDetail(pokemonName)
      .then((response) => {
        const data = response.data
        setDetail(data)
        setPreviewImg(data.sprites.front_default)
        setIsLoading(false)
      })
      .catch((error) => {
        alert('something error when fecthing data')
        console.log(error)
      })

    const myPokeStorage = localStorage.getItem('myPokeList')
    const initialmyPokeList = myPokeStorage? JSON.parse(myPokeStorage) : []
    setMyPokeList([...initialmyPokeList])

  }, [props.match.params])

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
        const updatedMyPokeList = [...myPokeList, caughtPoke]
        localStorage.setItem('myPokeList', JSON.stringify(updatedMyPokeList))
        setIsOpenModal(false)
      }
    }
    else if(myPokeList.length === 0 && caughtPoke.name){
      const updatedMyPokeList = [...myPokeList, caughtPoke]
      localStorage.setItem('myPokeList', JSON.stringify(updatedMyPokeList))
      setIsOpenModal(false)
    }
    else setIsError('Please enter a nickname')
  }

  return(
    isLoading
      ? <Loading />
      : (
        <>
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

          <MenuBar 
            isCatching={ isCatching }
            handleClickPokeBall={ handleClickPokeBall }
          />
        </>
      )
              
  )
}

export default PokemonDetailDomain
