import styled from '@emotion/styled'
import { IS_MOBILE_SCREEN } from 'utils/media-queries'

export const DesktopWrapper = styled.div`
  display: block;

  ${IS_MOBILE_SCREEN} {
    display: none;
  }
`

export const MobileWrapper = styled.div`
  display: none;

  ${IS_MOBILE_SCREEN} {
    display: block;
  }
`

export const Grid = styled.div`
  display : grid;   
  grid-template-columns : repeat(4, 1fr);
  grid-gap : 1rem; 

  ${IS_MOBILE_SCREEN} {
    grid-template-columns : repeat(2, 1fr);
    grid-gap : 0.25rem; 
  }
`
