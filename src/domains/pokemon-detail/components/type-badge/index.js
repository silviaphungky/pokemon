import React from 'react'
import POKEMON_TYPE_BADGE_COLOR_MAPPING from './constant'
import { Badge } from './styles'

const PokemonDetailTypeBadge = ({ type }) => (
  <Badge style={{ background: POKEMON_TYPE_BADGE_COLOR_MAPPING[type] }}>
    { type }
  </Badge>
)

export default PokemonDetailTypeBadge
