import styled from '@emotion/styled'
import { Button } from '..'
import { IS_MOBILE_SCREEN } from '../../utils/media-queries'


export const Modale = styled.div`
  &:before {
    content: "";
    display: none;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 12;
  }

  ${({ isOpen }) => isOpen
    ?`
    &:before {
      display: block;
    }
    `
    : ''
}
`
export const Opened = styled.div`
  &:before {
    display: block;
  }
`

export const ModalDialog = styled.div`
  background: #fefefe;
  border: #333333 solid 0px;
  border-radius: 5px;
  text-align:center;
  position: fixed;
  margin: auto 20rem; 
  top: -100%;
  left: 0%;
  right: 0%;
  z-index: 12;
  box-shadow:0 5px 10px rgba(0,0,0,0.3);
  -webkit-transform: translate(0, -500%);
  -ms-transform: translate(0, -500%);
  transform: translate(0, -500%);
  -webkit-transition: -webkit-transform 0.3s ease-out;
  -moz-transition: -moz-transform 0.3s ease-out;
  -o-transition: -o-transform 0.3s ease-out;
  transition: transform 0.3s ease-out;
  padding: 1.5rem;

    ${({ isOpen }) => isOpen
    ?`
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
    top: 10%;
    &:before {
      display: block;
    }
    `
    : ''
}

  ${IS_MOBILE_SCREEN} {
    margin: 0.5rem;
    padding: 0.75rem;
  }
`

export const ModalBody = styled.div`
  padding: 20px;
  width: 100%;
`

export const CloseButton = styled(Button)`
  float: right;
  font-size: 1.5rem;
`
