import { Text } from 'components/'
import React from 'react'
import { 
  StatsWrapper,
  Flex, 
  AchieveBar, 
  UnachieveBar 
} from './styles'

const PokemonDetailStats = ({ 
  name,
  stat 
}) => {
  //normalize percentage
  const percentage = stat.base_stat/200 * 100

  return(
    <StatsWrapper key={ stat.stat.name }>
      <Text style={{ flex: '0 0 50%' }}>
        { name || stat.stat.name }  
      </Text>
      <Flex>
        <AchieveBar percentage={ percentage }/>
        <UnachieveBar percentage={ 100-percentage }/>
      </Flex>
    </StatsWrapper>
  )
}
export default PokemonDetailStats
