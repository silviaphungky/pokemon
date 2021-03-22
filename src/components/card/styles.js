import styled from '@emotion/styled'
import { grey } from '../color-mapping'

export const Wrapper = styled.div`
  border: 1px solid ${({ background }) => background ? background : grey};
  padding: 1rem;
  background: ${({ background }) => background ? background : '#fff'};
  border-radius: 1rem;
  box-shadow: 0 .5rem 1rem black;
`
