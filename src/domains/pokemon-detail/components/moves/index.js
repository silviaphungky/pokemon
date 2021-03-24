import React from 'react'
import { 
  Badge, 
  Text 
} from 'components'
import { 
  Grid,
  DesktopWrapper,
  MobileWrapper
} from './styles'
import { blue } from 'components/color-mapping'
import PropTypes from 'proptypes'

const propTypes = {
  detail: PropTypes.shape({
    moves: PropTypes.array
  })
}

const defaultProps = {
  detail: {
    moves: []
  }
}

const PokemonDetailMoves = ({ detail }) => (
  <>
    <Text 
      bold 
      margin='1rem 0 0.5rem'
      marginMobile='1rem 0 0'
    >
      <MobileWrapper>
        <Badge color={ blue }>
          MOVES
        </Badge>
      </MobileWrapper>
      <DesktopWrapper>
        MOVES:
      </DesktopWrapper>
    </Text>
    <Grid 
      style={{ 
        height    : '8rem', 
        overflowY : 'auto',
        marginTop : '1rem' 
      }}
    >
      {
        detail.moves.map((move) => (
          <Text key={ `move-${move.move.name}` } bold>
            <Badge color={ blue }>
              { move.move.name }
            </Badge>
          </Text>
        ))
      }
    </Grid>
  </>
)

PokemonDetailMoves.propTypes = propTypes
PokemonDetailMoves.defaultProps = defaultProps

export default PokemonDetailMoves
