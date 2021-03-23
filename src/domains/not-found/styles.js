import styled from '@emotion/styled'
import { 
  Card,
  Button 
} from 'components'
import { IS_MOBILE_SCREEN } from 'utils/media-queries'

export const NotFoundCard = styled(Card)`
  box-shadow: none;
  margin-top: -2rem;
  border: none;
`

export const Img = styled.img`
  height: 70vh;
  display: block;
  margin: auto;

  ${IS_MOBILE_SCREEN}{
    margin: 0 auto 0;
    width: 100%;
    height: auto;
  }
`

export const RedirectBtn = styled(Button)`
  display: block;
  margin: 1rem auto;
`
