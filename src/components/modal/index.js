import React from 'react'
import { 
  ModalBody, 
  ModalDialog, 
  Modale,
  CloseButton 
} from './styles'
import PropTypes from 'proptypes'

const propTypes = {
  children  : PropTypes.node,
  isOpen    : PropTypes.bool,
  setIsOpen : PropTypes.func
}

const defaultProps = {
  children  : <></>,
  isOpen    : false,
  setIsOpen : () => {}
}

const Modal = ({
  children,
  isOpen,
  setIsOpen
}) => (
  <>
    <Modale 
      isOpen={ isOpen }
    >
      <ModalDialog 
        isOpen={ isOpen }         
      >
        <CloseButton 
          color='transparent'
          onClick={ () => setIsOpen(false) }
        >
          &times;
        </CloseButton> 
        { children }
        <ModalBody>
        </ModalBody>
      </ModalDialog>
    </Modale>
  </>
)

Modal.propTypes = propTypes
Modal.defaultProps = defaultProps

export default Modal
