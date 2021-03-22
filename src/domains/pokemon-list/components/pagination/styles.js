import styled from '@emotion/styled'
import { IS_MOBILE_SCREEN } from '../../../../utils/media-queries'

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0 1rem;

  ${IS_MOBILE_SCREEN} {
    margin: 1rem 0;
  }
`

