import React from 'react'
import { Wrapper } from './styles'
import PropTypes from 'proptypes'

const propTypes = {
  children : PropTypes.element,
  onClick  : PropTypes.func
}

const defaultProps = {
  children : <></>,
  onClick  : () => {}
}

const Button = ({ 
  children,
  ...props
}) => (
  <Wrapper 
    type='button' 
    { ...props }
    title='button'
  >
    { children }
  </Wrapper>
)

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
