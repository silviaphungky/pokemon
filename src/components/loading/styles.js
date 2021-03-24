import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { IS_MOBILE_SCREEN } from 'utils/media-queries'

const rotation = keyframes`
  from {
      transform: rotate(0deg);
  }
  to {
      transform: rotate(359deg);
  }
`

export const LoadingImg = styled.img`
  animation: ${rotation} 2s infinite linear;
  display: block;
  margin: 5rem auto 1rem;
  width: 10%;

  ${IS_MOBILE_SCREEN}{
    width: 20%;
    margin: 3rem auto 1rem;
  }
`
