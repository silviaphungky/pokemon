import React from 'react'
import dayjs from 'dayjs'
import { 
  Button,
  Card,
  Text 
} from 'components'
import { secondary } from 'components/color-mapping'
import { PokemonDetailStats } from 'domains/pokemon-detail/components'
import { Img } from './styles'
import POKEMON_TYPE_BADGE_COLOR_MAPPING from 'domains/pokemon-detail/components/type-badge/constant'
import PropTypes from 'proptypes'

const propTypes = {
  poke: PropTypes.shape({
    name        : PropTypes.string,
    speciesName : PropTypes.string,
    mainTypes   : PropTypes.string,
    image       : PropTypes.string,
    date        : PropTypes.string,
    stats       : PropTypes.array
  }),
  setSelectedPoke       : PropTypes.func,
  setIsOpenConfirmation : PropTypes.func
}

const defaultProps ={
  poke: {
    name        : '',
    speciesName : '',
    mainTypes   : '',
    image       : '',
    date        : '',
    stats       : []
  },
  setSelectedPoke       : () => {},
  setIsOpenConfirmation : () => {}
}

const MyPokemonListCard = ({ 
  poke,
  setSelectedPoke,
  setIsOpenConfirmation
}) => {

  const abbreviations = (name) => {
    const abbObj = {
      'special-attack'  : 'sp. atk',
      'special-defense' : 'sp. def'
    }
    return abbObj[name]
  }

  return(
    <>
      <Card
        key={ poke.name } 
        background={ POKEMON_TYPE_BADGE_COLOR_MAPPING[poke.mainTypes] }
        style={{ 
          marginTop : '3rem', 
          padding   : '1rem 0.5rem' 
        }}
      >
        <Img 
          src={ poke.image } 
          alt={ poke.name }
        />
        <Text 
          bold
          textAlign='center'
          textTransform='uppercase'
          margin='-2rem 0 1rem'
          marginMobile='-0.75rem 0 0'
          fontSizeMobile='1rem'
        >
          { poke.speciesName }
        </Text>
        <Text 
          bold
          margin='0.75rem 0 0'
          marginMobile='0.75rem 0 0'
        >
          Nickname:
        </Text>
        <Text 
          margin='0.5rem 0 0'
          marginMobile='0.25rem 0 0'
        >
          { poke.name }
        </Text>

        <Text 
          bold
          margin='0.75rem 0 0'
          marginMobile='0.75rem 0 0'
        >
          Caught at:
        </Text>
        <Text 
          margin='0.5rem 0 0'
          marginMobile='0.25rem 0 0'
        >
          { dayjs(poke.date).format('DD MMMM YYYY') }
        </Text>

        <Text 
          bold
          margin='0.75rem 0 0'
          marginMobile='0.75rem 0 0'
        >
          Stats:
        </Text>
        {
          poke.stats.map((stat) => (
            <PokemonDetailStats 
              stat={ stat }
              name={ abbreviations(stat.stat.name) } 
              key={ stat.stat.name }
            />
          ))
        }
        <Button 
          aria-label='release'
          onClick={ () => {
            setIsOpenConfirmation(true)
            setSelectedPoke(poke)
          } }
          color={ secondary }
          width='100%'
          margin='1rem 0 0 0'
        >
          <Text bold>
            RELEASE
          </Text>
        </Button>
      </Card>
    </>
  )
}

MyPokemonListCard.propTypes = propTypes
MyPokemonListCard.defaultProps = defaultProps

export default MyPokemonListCard
