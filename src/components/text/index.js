import React from 'react'
import { Wrapper } from './styles'
import PropTypes from 'proptypes'

const propTypes = {
  children: PropTypes.node
}

const defaultProps = {
  children: <></>
}

const Text = ({ children, ...props }) => (
  <Wrapper { ...props }>
    { children }
  </Wrapper>
)

Text.propTypes = propTypes
Text.defaultProps = defaultProps

export default Text
