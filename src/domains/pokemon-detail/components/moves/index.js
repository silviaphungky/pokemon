import React from 'react'
import { Badge, Text } from '../../../../components'
import { DesktopWrapper, MobileWrapper } from '../../styles'
import { Grid } from './styles'

const PokemonDetailMoves = ({ detail }) => (
  <div style={{ marginBottom: '0rem' }}>
    <Text 
      bold 
      margin='1rem 0 0.5rem'
      marginMobile='1rem 0 0'
    >
      <MobileWrapper>
        <Badge color='cadetblue'>
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
            <Badge color='cadetblue'>
              { move.move.name }
            </Badge>
          </Text>
        ))
      }
    </Grid>
  </div>
)

export default PokemonDetailMoves
