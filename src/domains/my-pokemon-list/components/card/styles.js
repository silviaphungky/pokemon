import styled from '@emotion/styled'
import { IS_MOBILE_SCREEN } from 'utils/media-queries'

export const Grid = styled.div`
  display : grid;   
  grid-template-columns : repeat(4, 1fr);
  grid-gap : 3rem; 

  ${IS_MOBILE_SCREEN} {
    grid-template-columns : repeat(2, 1fr);
    grid-gap : 1rem; 
  }
`

export const Img = styled.img`
  margin-top: -6rem;

  ${IS_MOBILE_SCREEN}{
    margin-top: -4.5rem;
  }
` 
