import React from 'react'
import { 
  Button, 
  Modal, 
  Text,
  Input 
} from 'components'
import { ErrorMessage } from './styles'

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
      <img 
        src={ caughtPoke.sprites?.front_default }
        alt={caughtPoke.name}
      />
    </div>
    <div>
      <Input 
        value={ caughtPoke.name }
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

export default PokemonDetailFormModal
