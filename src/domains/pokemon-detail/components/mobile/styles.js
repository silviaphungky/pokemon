import styled from '@emotion/styled'
import { Card } from 'components/'
import { primary } from 'components/color-mapping'
import { IS_MOBILE_SCREEN } from 'utils/media-queries'

export const MobileWrapper = styled.div`
  display: none;

  ${IS_MOBILE_SCREEN} {
    display: block;
  }
`

export const PokemonDetailCard = styled(Card)`
  background : ${primary}; 
  border : none;
  border-radius: 2rem 2rem 0 0;
  min-height : 100vh;
  padding-bottom: 2rem;
  margin-top : -2rem;
`

export const Flex = styled.div`
  display : flex;
  align-items: center;
  margin: 0.5rem 0;
`
