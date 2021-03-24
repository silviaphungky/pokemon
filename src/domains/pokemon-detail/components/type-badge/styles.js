import styled from '@emotion/styled'
import { IS_MOBILE_SCREEN } from 'utils/media-queries'

export const Badge = styled.div`
  border-radius: 3px;
  padding: 0.3rem 1rem;
  text-align: center;
  font-weight: bold;
  margin: 0 0.25rem;
  background: ${({ background }) => background}

  ${IS_MOBILE_SCREEN} {
    font-size: 0.75rem;
  }
`