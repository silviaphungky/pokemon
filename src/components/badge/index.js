import React from 'react'
import { Wrapper } from './styles'

const Badge = ({
  children,
  ...props
}) => (
  <Wrapper { ...props }>
    { children }
  </Wrapper>
)

export default Badge
