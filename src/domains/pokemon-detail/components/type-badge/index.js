import React from 'react'
import POKEMON_TYPE_BADGE_COLOR_MAPPING from './constant'
import { Badge } from './styles'
import PropTypes from 'proptypes'

const propTypes = {
  type: PropTypes.string
}

const defaultProps = {
  type: ''
}

const PokemonDetailTypeBadge = ({ type }) => (
  <Badge background={ POKEMON_TYPE_BADGE_COLOR_MAPPING[type] }>
    { type }
  </Badge>
)

PokemonDetailTypeBadge.propTypes = propTypes
PokemonDetailTypeBadge.defaultProps = defaultProps

export default PokemonDetailTypeBadge
