import styled from '@emotion/styled'

export const Wrapper = styled.button`
  background: ${({ color }) => color};
  border: ${({ color }) => color === 'transparent' ? 'none' : `1px solid ${color}`};
  outline: 0;
  width: ${({ width }) => width};
  border-radius: 4px;
  padding: ${({ larger }) => larger? '0.5rem 1.5rem' : ' 0.25rem'};
  margin: ${({ margin }) => margin};
  cursor: pointer;
`
