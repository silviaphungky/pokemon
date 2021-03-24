import styled from '@emotion/styled'
import { IS_MOBILE_SCREEN } from 'utils/media-queries'

export const Wrapper = styled.div`
  margin: 1.5rem 3rem;

  ${IS_MOBILE_SCREEN} {
    margin: 1rem;
  }
`
