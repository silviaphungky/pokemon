import React from 'react'
import { 
  Flex,
  PokeImg,
  RotationCircle, 
  Img 
} from './styles'
import PropTypes from 'proptypes'

const propTypes = {
  isCatching : PropTypes.bool,
  detail     : PropTypes.shape({
    name    : PropTypes.string, 
    weight  : PropTypes.number,
    height  : PropTypes.number,
    types   : PropTypes.array,
    sprites : PropTypes.shape({
      front_default : PropTypes.string,
      back_default  : PropTypes.string,
      front_shiny   : PropTypes.string,
      back_shiny    : PropTypes.string
    })
  }),
  previewImg    : PropTypes.string,
  setPreviewImg : PropTypes.func
}

const defaultProps = {
  isCatching : false,
  detail     : {
    name    : '',
    weight  : 0,
    height  : 0,
    types   : [],
    sprites : {
      front_default : '',
      back_default  : '',
      front_shiny   : '',
      back_shiny    : ''
    }
  },
  previewImg    : '',
  setPreviewImg : () => {}
}

const PokemonDetailPreviewImage = ({
  isCatching,
  detail,
  previewImg,
  setPreviewImg
}) => (
  <>
    <div style={{ position: 'relative' }}>
      <RotationCircle isCatching={ isCatching }/>
      <PokeImg
        src={ previewImg } 
        alt={ detail.name }
        isCatching={ isCatching }
      />
    </div>
          
    <Flex justifyContent='center'>
      <Img
        src={ detail.sprites.front_default } 
        alt='front default' 
        previewImg={ previewImg === detail.sprites.front_default }
        onClick={ () => setPreviewImg(detail.sprites.front_default) }
      />
      <Img
        src={ detail.sprites.back_default } 
        alt='back default' 
        previewImg={ previewImg === detail.sprites.back_default }
        onClick={ () => setPreviewImg(detail.sprites.back_default) }
      />
      <Img
        src={ detail.sprites.front_shiny } 
        alt='front shiny' 
        previewImg={ previewImg === detail.sprites.front_shiny }
        onClick={ () => setPreviewImg(detail.sprites.front_shiny) }
      />
      <Img
        src={ detail.sprites.back_shiny } 
        alt='back shiny' 
        previewImg={ previewImg === detail.sprites.back_shiny }
        onClick={ () => setPreviewImg(detail.sprites.back_shiny) }
      />
    </Flex>
  </>
)

PokemonDetailPreviewImage.propTypes = propTypes
PokemonDetailPreviewImage.defaultProps = defaultProps

export default PokemonDetailPreviewImage
