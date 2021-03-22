import React from 'react'
import { 
  ModalBody, 
  ModalDialog, 
  Modale,
  CloseButton 
} from './styles'

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

export default Modal
