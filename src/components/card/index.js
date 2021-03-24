import React from 'react'
import {
  Wrapper
} from './styles'
import PropTypes from 'proptypes'

const propTypes = {
  children: PropTypes.element
}

const defaultProps = {
  children: <></>
}

const Card = ({ 
  children, 
  ...props 
}) => (
  <Wrapper 
    { ...props }
    data-testid='card'
  >
    { children }
  </Wrapper>
)

Card.propTypes = propTypes
Card.defaultProps = defaultProps

export default Card
