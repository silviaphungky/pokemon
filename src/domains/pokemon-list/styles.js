import styled from '@emotion/styled'
import { primary } from 'components/color-mapping'
import { Card } from 'components'
import { IS_MOBILE_SCREEN } from 'utils/media-queries'

export const HeaderImgWrapper = styled.div`
  background: rgba(149, 2, 23, 0.8);
  padding: 1rem 0 4rem;
`

export const HeaderImg = styled.img`
  width: 25%;
  display: block;
  margin: auto;
  height: auto;

  ${IS_MOBILE_SCREEN} {
    width: 90%;
    height: auto;
  }
`

export const PokemonListCard = styled(Card)`
  background: ${primary}; 
  border: none;
  border-radius: 2rem 2rem 0 0;
  min-height: 100vh;
  padding-bottom: 8rem;    
  margin-top: -3rem;
`

export const Grid = styled.div`
  display : grid;   
  grid-template-columns : repeat(4, 1fr);
  grid-gap : 1rem; 

  ${IS_MOBILE_SCREEN} {
    grid-template-columns : repeat(2, 1fr);
    grid-gap : 1rem; 
  }
`

export const PokemonCard = styled(Card)`
  margin-top: 1rem;
`

export const Img = styled.img`
  display: block;
  margin: auto;
  width: auto;
  height: auto;
`
