import React from 'react'
import { Wrapper } from './styles'

const Button = ({ 
  children,
  ...props
}) => (
  <Wrapper { ...props }>
    { children }
  </Wrapper>
)

export default Button
