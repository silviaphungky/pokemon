import styled from '@emotion/styled'
import { Card } from 'components'
import { IS_MOBILE_SCREEN } from 'utils/media-queries'

export const DesktopWrapper = styled.div`
  display: block;

  ${IS_MOBILE_SCREEN} {
    display: none;
  }
`

export const Flex = styled.div`
  display : flex;
  align-items: center;
  margin: 0.5rem 0;
`

export const PokemonDetailCard = styled(Card)`
  background: #fbfbf9; 
  border: none;
  border-radius: 2rem 2rem 0 0;
  padding-bottom: 5rem;
  box-shadow: none;
  margin-top: -2rem;   
`

export const ImageWrapper = styled.div`
  flex: 0 0 30%;
`

export const InformationWrapper = styled.div`
  flex: 0 0 60%;
  padding: 0 0 0 3rem;
`
