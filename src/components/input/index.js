import React from 'react'
import { Wrapper } from './styles'

const Input = ({ 
  children,
  ...props 
}) => (
  <Wrapper { ...props }>
    { children }
  </Wrapper>
)

export default Input
