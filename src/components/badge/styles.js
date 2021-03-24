import styled from '@emotion/styled'
import { IS_MOBILE_SCREEN } from 'utils/media-queries'

export const Wrapper = styled.div`
  border-radius: 3px;
  padding: 0.3rem 0.5rem;
  text-align: center;
  font-weight: bold;
  background: ${({ color }) => color ? color : 'blue'};

  ${IS_MOBILE_SCREEN} {
    font-size: 0.75rem;
  }
`
