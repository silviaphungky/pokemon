import React from 'react'
import { Wrapper } from './styles'

const Badge = ({
  children,
  ...props
}) => (
  <Wrapper 
    { ...props }
    data-testid='badge'
  >
    { children }
  </Wrapper>
)

export default Badge
