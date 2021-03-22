import styled from '@emotion/styled'
import { Card } from 'components/'
import { primary } from 'components/color-mapping'

export const PokemonDetailCard = styled(Card)`
  background : ${primary}; 
  border : none;
  border-radius: 2rem 2rem 0 0;
  min-height : 100vh;
  padding-bottom: 2rem;
  margin-top : -2rem;
`
