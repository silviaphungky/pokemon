import React from 'react'
import { 
  Button,
  Text,
  Modal 
} from 'components'
import { Flex } from './styles'
import { secondary } from 'components/color-mapping'
import PropTypes from 'proptypes'

const propTypes = {
  selectedPoke: PropTypes.shape({
    name  : PropTypes.string,
    image : PropTypes.string
  }),
  isOpenConfirmationModal    : PropTypes.bool,
  setIsOpenConfirmationModal : PropTypes.func,
  handleRemovePoke           : PropTypes.func
}

const defaultProps = {
  selectedPoke: {
    name  : PropTypes.string,
    image : PropTypes.string
  },
  isOpenConfirmationModal    : false,
  setIsOpenConfirmationModal : () => {},
  handleRemovePoke           : () => {}
}

const MyPokemonListReleaseConfirmation = ({
  selectedPoke,
  isOpenConfirmationModal,
  setIsOpenConfirmationModal,
  handleRemovePoke
}) => (
  <Modal 
    isOpen={ isOpenConfirmationModal }
    setIsOpen={ setIsOpenConfirmationModal }
  >
    <Text>
      Are you sure want to relase <strong>{ selectedPoke.name }</strong> ?
    </Text>

    <img 
      src={ selectedPoke.image } 
      alt={ selectedPoke.name }
    />

    <Flex>
      <Button 
        aria-label='yes'
        margin='0 1rem 0 0'
        larger
        color={ secondary }
        onClick={ () => handleRemovePoke(selectedPoke.name) }
      >
        <Text> 
          Yes
        </Text>
      </Button>
      <Button 
        aria-label='no'
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

MyPokemonListReleaseConfirmation.propTypes = propTypes
MyPokemonListReleaseConfirmation.defaultProps = defaultProps

export default MyPokemonListReleaseConfirmation
