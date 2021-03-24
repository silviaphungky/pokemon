import styled from '@emotion/styled'
import { secondary } from 'components/color-mapping'
import { IS_MOBILE_SCREEN } from 'utils/media-queries'

export const PokemonName = styled.h3`
  padding: 2rem 0 1rem;
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;
  background: ${secondary};
  height: 4rem;

  ${IS_MOBILE_SCREEN} {
    text-align: center;
    padding: 1rem 0;
    height: 3rem;
  }
`
