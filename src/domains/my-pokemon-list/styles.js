import styled from '@emotion/styled'
import { Card } from 'components'
import { primary } from 'components/color-mapping'
import { IS_MOBILE_SCREEN } from '../../utils/media-queries'

export const PokedexCard = styled(Card)`
  background : #ffffff;
  border : none;
  border-radius: 2rem 2rem 0 0;
  min-height : 100vh;
  padding-bottom: 5rem;
  margin-top : -2rem;

  ${IS_MOBILE_SCREEN}{
    background : ${primary}; 
  }
`

export const Grid = styled.div`
  display : grid;   
  grid-template-columns : repeat(4, 1fr);
  grid-gap : 3rem; 

  ${IS_MOBILE_SCREEN} {
    grid-template-columns : repeat(2, 1fr);
    grid-gap : 0.5rem; 
  }
`
