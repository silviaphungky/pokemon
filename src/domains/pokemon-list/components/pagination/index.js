import React from 'react'
import {
  Button,
  Text
} from 'components'
import { Flex } from './styles'
import PropTypes from 'proptypes'
import { secondary } from 'components/color-mapping'

const propTypes = {
  loading   : PropTypes.bool,
  pokemons  : PropTypes.object,
  offset    : PropTypes.number,
  limit     : PropTypes.number,
  setOffset : PropTypes.func
}

const defaultProps = {
  loading   : true,
  pokemons  : {},
  offset    : 1,
  limit     : 10,
  setOffset : () => {}
}

const PokemonListPagination = ({
  loading,
  pokemons,
  offset,
  limit,
  setOffset
}) => (
  <>
    <Flex>
      <Button
        aria-label='previous'
        margin='0 0.5rem'
        onClick={ () => {
          const prev = offset - limit
          setOffset(prev)
        } }
        disabled={ offset === 1 || loading }
        color={ secondary }
      >
        <i className="fas fa-angle-left" />
      </Button>
      <Button 
        aria-label='next'
        margin='0 0.5rem'
        onClick={ () => {
          const next = offset + limit
          setOffset(next)
        } }
        color={ secondary }
        disabled={ pokemons.count - offset  < 10 || loading }
      >
        <i className="fas fa-angle-right"></i>
      </Button>
    </Flex>
    <Text
      style={{ textAlign: 'center' }}
      margin='0 0 1rem'
      marginMobile='0.75rem 0'
      color='white'
      bold
    >
      { offset } to { offset + limit - 1 } of { pokemons.count } pokemons
    </Text>
  </>
)

PokemonListPagination.propTypes = propTypes
PokemonListPagination.defaultProps = defaultProps

export default PokemonListPagination
