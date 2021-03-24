import React from 'react'
import { 
  Badge, 
  Text,
  Layout 
} from 'components'
import { 
  PokemonDetailMoves, 
  PokemonDetailPreviewImage, 
  PokemonDetailTypeBadge 
} from 'domains/pokemon-detail/components'
import { 
  MobileWrapper,
  PokemonDetailCard,
  Flex
} from './styles'
import PropTypes from 'proptypes'

const propTypes = {
  detail: PropTypes.shape({
    weight : PropTypes.number,
    height : PropTypes.number,
    types  : PropTypes.array
  }),
  isCatching    : PropTypes.bool,
  previewImg    : PropTypes.string,
  setPreviewImg : PropTypes.func
}

const defaultProps = {
  detail: {
    weight : 0,
    height : 0,
    types  : []
  },
  isCatching    : false,
  previewImg    : '',
  setPreviewImg : () => {}
}

const PokemonDetailMobile = ({
  detail,
  isCatching,
  previewImg,
  setPreviewImg
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
          <Flex justifyContent='flex-end'>
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

PokemonDetailMobile.propTypes = propTypes
PokemonDetailMobile.defaultProps = defaultProps

export default PokemonDetailMobile
