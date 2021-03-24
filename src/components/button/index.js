import React from 'react'
import { Wrapper } from './styles'
import PropTypes from 'proptypes'

const propTypes = {
  children: PropTypes.node
}

const defaultProps = {
  children: <></>
}

const Button = ({ 
  children,
  ...props
}) => (
  <Wrapper 
    type='button' 
    { ...props }
    data-testid='button'
  >
    { children }
  </Wrapper>
)

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
