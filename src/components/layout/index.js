import React from 'react'
import { Wrapper } from './styles'
import PropTypes from 'proptypes'

const propTypes = {
  children: PropTypes.node
}

const defaultProps = {
  children: <></>
}

const Layout = ({ children }) => (
  <Wrapper>
    { children }
  </Wrapper>
)

Layout.propTypes = propTypes
Layout.defaultProps = defaultProps

export default Layout
