import React from 'react'
import { 
  Button, 
  Modal, 
  Text,
  Input 
} from 'components'
import { ErrorMessage, Img } from './styles'
import PropTypes from 'proptypes'

const propTypes = {
  isOpenModal: PropTypes.bool,
  detail: PropTypes.shape({
    species: PropTypes.shape({
      name: PropTypes.string
    })
  }),
  caughtPoke: PropTypes.shape({
    name: PropTypes.string,
    sprites: PropTypes.shape({
      front_default: PropTypes.string
    })
  }),
  setIsOpenModal: PropTypes.func,
  setCaughtPoke: PropTypes.func,
  isError: PropTypes.string,
  handleAddToMyPokeList: PropTypes.func
}

const defaultProps = {
  isOpenModal: false,
  detail:{
    species:{
      name: ''
    }
  },
  caughtPoke:{
    name: '',
    sprites:{
      front_default: ''
    }
  },
  setIsOpenModal: () => {},
  setCaughtPoke: () => {},
  isError: '',
  handleAddToMyPokeList: () => {}
}

const PokemonDetailFormModal = ({
  isOpenModal,
  detail,
  caughtPoke,
  setIsOpenModal,
  setCaughtPoke,
  isError,
  handleAddToMyPokeList
}) => (

  <Modal
    isOpen={ isOpenModal }
    setIsOpen={ setIsOpenModal }
  >
    <Text
      marginMobile='2rem 0 0'
      fontSizeMobile='0.875rem'
    >
      Congrats! <strong style={{ textTransform: 'uppercase' }}>{ detail.species.name }</strong> was caught
    </Text>
    <Text 
      marginMobile='0.5rem 0'
      fontSizeMobile='0.875rem'
    >
      Let's set a nickname for new Pokemon
    </Text>
    <div>
      <Img 
        src={ caughtPoke.sprites?.front_default }
        alt='caught pokemon'
      />
    </div>

    <div>
      <Input 
        value={ caughtPoke.name ? caughtPoke.name : ''}
        type='text'
        placeholder='enter nickname'
        onChange={ (e) =>{
          caughtPoke.name = e.target.value
          setCaughtPoke({ ...caughtPoke })
        } }
      />
    </div>
    <ErrorMessage 
      isError={isError}
      marginMobile='0.5rem 0 0'
    >
      {isError}
    </ErrorMessage>
    <Button
      arial-label='add to pokedex'
      onClick={ handleAddToMyPokeList }
      color='rgb(3,172,14)'
      margin='1rem 0 0'
      larger
    >
      <Text 
        color='#ffffff'
        bold
      >
        add to pokedex
      </Text>
    </Button>
  </Modal>

)

PokemonDetailFormModal.propTypes = propTypes
PokemonDetailFormModal.defaultProps = defaultProps

export default PokemonDetailFormModal
