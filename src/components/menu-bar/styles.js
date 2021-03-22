import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { IS_MOBILE_SCREEN } from 'utils/media-queries'

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  background: orange;
  width: 100vw;
  display: flex;
  justify-content : space-between;
  box-shadow: 0 0 2rem 0 black;
  z-index: 10;
  padding: ${({ isPadding }) => isPadding ? '0.25rem 0' : '0'};
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
    margin: auto;
    opacity: ${({ isCatching }) => isCatching ? 0.3 : 1};
    height: auto;
    width: 2.5rem;
    display: block;
  }
`