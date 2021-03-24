import React from 'react'
import { Wrapper } from './styles'

const Input = ({ ...props }) => (
  <Wrapper 
    { ...props }
    data-testid='input'
  />
)

export default Input
