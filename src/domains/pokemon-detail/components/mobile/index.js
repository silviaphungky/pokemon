import React from 'react'
import { 
  PokemonDetailMoves, 
  PokemonDetailPreviewImage, 
  PokemonDetailTypeBadge 
} from 'domains/pokemon-detail/components'
import { 
  Badge, 
  Text,
  Layout 
} from 'components'
import { 
  Flex, 
  MobileWrapper 
} from '../../styles'
import { 
  PokemonDetailCard
} from './styles'

const PokemonDetailMobile = ({
  detail,
  isCatching,
  previewImg,
  setPreviewImg,
  handleClickPokeBall
}) => (
  <MobileWrapper>
    <PokemonDetailCard>
      <Layout>
    
        <Flex justifyContent='space-between'>
          { /*types*/ }
          <div>
            <Flex>
              {
                detail.types.map((type) => (
                  <PokemonDetailTypeBadge 
                    key={ `type-${type.type.name}` }
                    type={ type.type.name } 
                  />
                ))
              }
            </Flex>
          </div>

          { /*weight height*/ }
          <Flex>
            <Text>
              <Badge color='rgba(246, 39, 127, 0.5)'>
                { detail.weight/10 } kg / { detail.height/10 } m
              </Badge>
            </Text>
          </Flex>
        </Flex>
      
        <PokemonDetailPreviewImage 
          isCatching={ isCatching }
          detail={ detail }
          previewImg={ previewImg }
          setPreviewImg={ setPreviewImg }
        />
      
        <PokemonDetailMoves detail={ detail }/>
      </Layout>
    </PokemonDetailCard>
  </MobileWrapper>
)

export default PokemonDetailMobile
