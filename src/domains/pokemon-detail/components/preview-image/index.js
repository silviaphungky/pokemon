import React from 'react'
import { 
  RotationCircle, 
  Img 
} from './styles'
import {  Flex, PokeImg } from '../../styles'

const PokemonDetailPreviewImage = ({
  isCatching,
  detail,
  previewImg,
  setPreviewImg
}) => (
  <>
    <RotationCircle isCatching={ isCatching }/>
    <PokeImg
      src={ previewImg } 
      alt={ detail.name }
      isCatching={ isCatching }
    />
          
    <Flex justifyContent='center'>
      <Img
        src={ detail.sprites.front_default } 
        alt={ detail.name }
        opacity={ previewImg === detail.sprites.front_default ? 1 : 0.5 }
        border={ previewImg === detail.sprites.front_default ? '1px solid orange' : 'none' }
        onClick={ () => setPreviewImg(detail.sprites.front_default) }
      />
      <Img
        src={ detail.sprites.back_default } 
        alt={ detail.name }
        opacity={ previewImg === detail.sprites.back_default ? 1 : 0.5 }
        border={ previewImg === detail.sprites.back_default ? '1px solid orange' : 'none' }
        onClick={ () => setPreviewImg(detail.sprites.back_default) }
      />
      <Img
        src={ detail.sprites.front_shiny } 
        alt={ detail.name }
        opacity={ previewImg === detail.sprites.front_shiny ? 1 : 0.5 }
        border={ previewImg === detail.sprites.front_shiny ? '1px solid orange' : 'none' }
        onClick={ () => setPreviewImg(detail.sprites.front_shiny) }
      />
      <Img
        src={ detail.sprites.back_shiny } 
        alt={ detail.name }
        opacity={ previewImg === detail.sprites.back_shiny ? 1 : 0.5 }
        border={ previewImg === detail.sprites.back_shiny ? '1px solid orange' : 'none' }
        onClick={ () => setPreviewImg(detail.sprites.back_shiny) }
      />
    </Flex>
  </>
)

export default PokemonDetailPreviewImage
