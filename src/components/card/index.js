import React from 'react'
import {
  Wrapper
} from './styles'

const Card = ({ children, ...props }) => (
  <Wrapper { ...props }>
    { children }
  </Wrapper>
)

export default Card
