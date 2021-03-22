import styled from '@emotion/styled'
import { Text } from 'components/'

export const ErrorMessage = styled(Text)`
  color: red;
  display: ${({ isError }) => isError ? 'block' : 'none'};
`
