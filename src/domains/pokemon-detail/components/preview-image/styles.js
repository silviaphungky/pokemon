import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { secondary } from 'components/color-mapping'
import { IS_MOBILE_SCREEN, IS_TAB_SCREEN } from 'utils/media-queries'

export const Flex = styled.div`
  display : flex;
  justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'flex-start'};
  margin: 0.5rem 0;
`

export const jump  = keyframes`
  0%   {transform: translate3d(0,0,0) scale3d(1,1,1);}
  40%  {transform: translate3d(0,10%,0) scale3d(.7,1.5,1);}
  100% {transform: translate3d(0,50%,0) scale3d(1.5,.7,1);}
`

export const PokeImg = styled.img`
  padding: 1rem;
  transform-origin: 50% 50%;
  width: 12rem;
  height: auto;
  display: block; 
  margin: auto;

  ${IS_TAB_SCREEN}{
    width: 10rem;
  }

  ${IS_MOBILE_SCREEN} {
    ${({ isCatching }) => isCatching ? { animation: 'none' } : { animation: `${jump} 1.25s linear alternate infinite` }};
    width: 50%;
    display: block; 
    margin: -1rem auto 3rem;
  }
`

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
  top: 0;
  bottom: 0;
  width: 50%;
  height: 100%;
  margin: 0 auto;
  left: 0;
  right: 0;
  position: absolute;
  animation: ${spinoffPulse} 1s infinite linear;
  display: ${({ isCatching }) => isCatching ? 'block' : 'none'}

  ${IS_TAB_SCREEN}{
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
  }

  ${IS_MOBILE_SCREEN}{
    width: 50vw;
    height: 50vw;
    top: 1rem;
    left: 0;
    right: 0;
  }
`

export const Img = styled.img`
  flex: 0 0 20%; 
  opacity: ${({ previewImg }) => previewImg ? 1 : 0.5};
  border: ${({ previewImg }) => previewImg ? `1px solid ${secondary}` : 'none'};
  border-radius: 3px; 
  width: 20%;
  cursor: pointer;

  ${IS_MOBILE_SCREEN}{
    flex: 0 0 20%;
    width: 20%;
  }
`
