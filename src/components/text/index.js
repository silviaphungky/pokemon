import React from 'react'
import { Wrapper } from './styles'

const Text = ({ children, ...props }) => (
  <Wrapper { ...props }>
    { children }
  </Wrapper>
)

export default Text
