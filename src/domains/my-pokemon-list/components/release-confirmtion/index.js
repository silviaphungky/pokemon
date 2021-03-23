import React from 'react'
import { 
  Button,
  Text,
  Modal 
} from 'components'
import { Flex } from './styles'
import { secondary } from 'components/color-mapping'

const MyPokemonListReleaseConfirmation = ({
  poke,
  isOpenConfirmationModal,
  setIsOpenConfirmationModal,
  handleRemovePoke
}) => (
  <Modal 
    isOpen={ isOpenConfirmationModal }
    setIsOpen={ setIsOpenConfirmationModal }
  >
    <Text>
      Are you sure want to relase <strong>{ poke.name }</strong> ?
    </Text>

    <img 
      src={ poke.image } 
      alt={ poke.name }
    />

    <Flex>
      <Button 
        margin='0 1rem 0 0'
        larger
        color={ secondary }
        onClick={ () => handleRemovePoke(poke.name) }
      >
        <Text> 
          Yes
        </Text>
      </Button>
      <Button 
        larger
        color='maroon'
        onClick={ () => setIsOpenConfirmationModal(false) }
      >
        <Text>
          No
        </Text>
      </Button>
    </Flex>
  </Modal>
)

export default MyPokemonListReleaseConfirmation
