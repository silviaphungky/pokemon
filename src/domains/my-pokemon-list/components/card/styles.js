import styled from '@emotion/styled'
import { IS_MOBILE_SCREEN } from 'utils/media-queries'

export const Img = styled.img`
  margin: -6rem auto 1rem;;
  width: 80%;
  display: block;

  ${IS_MOBILE_SCREEN}{
    margin-top: -4.5rem;
    width: auto;
  }
` 
