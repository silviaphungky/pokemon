import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { IS_MOBILE_SCREEN } from 'utils/media-queries'

const spinoffPulse = keyframes`
  0% { transform:rotate(0deg); }
  100% { transform:rotate(360deg);  }
`

export const RotationCircle = styled.div `
  background-color: transparent;
  border-top: 5px solid rgba(189, 215, 60, 0.6);
  border-bottom: 5px solid rgba(246, 39, 127, 0.6);
  opacity: .9;
  border-radius: 50%;
  top: 9rem;
  width: 22vw;
  height: 22vw;
  margin: 0 auto;
  left: 5rem;
  position: absolute;
  animation: ${spinoffPulse} 1s infinite linear;
  display: ${({ isCatching }) => isCatching ? 'block' : 'none'};

  ${IS_MOBILE_SCREEN}{
    width: 50vw;
    height: 50vw;
    top: 7.5rem;
  }
`

export const Img = styled.img`
  flex: 0 0 20%; 
  opacity: ${({ opacity }) => opacity}; 
  border: ${({ border }) => border};
  border-radius: 3px; 
  width: 20%;
  cursor: pointer;

  ${IS_MOBILE_SCREEN}{
    flex: 0 0 20%;
    width: 20%;
  }
`
