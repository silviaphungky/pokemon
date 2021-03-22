import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { IS_MOBILE_SCREEN } from 'utils/media-queries'

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  background: orange;
  width: 100vw;
  display: flex;
  display: -webkit-box;   /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox;  /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
  justify-content : center;
  padding: 0.5rem 0;
  box-shadow: 0 0 2rem 0 black;
  z-index: 10;
`

const rotation = keyframes`
  from {
      transform: rotate(0deg);
  }
  to {
      transform: rotate(359deg);
  }
`

export const PokeBallImg = styled.img`
  display: none;

  ${IS_MOBILE_SCREEN}{
    ${({ isCatching }) => isCatching ? { animation: `${rotation} 2s infinite linear` } : { animation: 'none' }};
    display: ${({ isHide }) => isHide ? 'none' : 'block'};
    margin: auto;
    opacity: ${({ isCatching }) => isCatching ? 0.3 : 1};
    height: auto;
  }
`