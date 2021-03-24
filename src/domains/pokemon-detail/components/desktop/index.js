import React from 'react'
import { 
  Badge, 
  Button, 
  Text,
  Layout 
} from 'components'
import { 
  PokemonDetailMoves, 
  PokemonDetailStats, 
  PokemonDetailTypeBadge,
  PokemonDetailPreviewImage  
} from 'domains/pokemon-detail/components'
import { 
  DesktopWrapper, 
  Flex,
  ImageWrapper, 
  InformationWrapper, 
  PokemonDetailCard
} from './styles'
import PropTypes from 'proptypes'
import { secondary } from 'components/color-mapping'

const propTypes = {
  detail: PropTypes.shape({
    weight          : PropTypes.number,
    height          : PropTypes.number,
    types           : PropTypes.array,
    base_experience : PropTypes.number
  }),
  isCatching          : PropTypes.bool,
  previewImg          : PropTypes.string,
  setPreviewImg       : PropTypes.func,
  handleClickPokeBall : PropTypes.func
}

const defaultProps = {
  detail: {
    weight          : 0,
    height          : 0,
    types           : [],
    base_experience : 0
  },
  isCatching          : false,
  previewImg          : '',
  setPreviewImg       : () => {},
  handleClickPokeBall : () => {}
}

const PokemonDetailDesktop = ({
  detail,
  isCatching,
  previewImg,
  setPreviewImg,
  handleClickPokeBall
}) => {
  const bodyElt = document.querySelector('body')
  bodyElt.style.background = '#ffffff'
  
  return(
    <DesktopWrapper>
      <PokemonDetailCard >
        <Layout>

          <Flex>
            <ImageWrapper>
              <PokemonDetailPreviewImage 
                isCatching={ isCatching }
                detail={ detail }
                previewImg={ previewImg }
                setPreviewImg={ setPreviewImg }
              />

              <Button
                aria-label='catch me'
                width='100%'
                color={ secondary }
                margin='1rem 0'
                onClick={ handleClickPokeBall }
                disabled={ isCatching }
              >
                <Text
                  margin='0.25rem 0'
                  bold
                  fontSize='1.5rem'
                >
                  CATCH ME
                </Text>
              </Button>
            </ImageWrapper>
            
            <InformationWrapper>
              <Text
                bold
                margin='1rem 0 0.5rem'
              >
                TYPES:
              </Text>
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

              <Text
                bold
                margin='1rem 0 0.5rem'
              >
                XP:
              </Text>
              <Flex>
                <Text>
                  <Badge color='rgba(246, 39, 127, 0.7)'>
                    { detail.base_experience }
                  </Badge>
                </Text>
              </Flex>

              <Text
                bold
                margin='1rem 0 0.5rem'
              >
                WEIGHT / HEIGHT:
              </Text>
              <Flex>
                <Text>
                  <Badge color='rgba(246, 39, 127, 0.7)'>
                    { detail.weight/10 } kg / { detail.height/10 } m
                  </Badge>
                </Text>
              </Flex>

              <Text 
                bold
                margin='1rem 0 0.5rem'
              >
                STATS:
              </Text>
              {
                detail.stats.map((stat) => (
                  <PokemonDetailStats 
                    key={ stat.name }
                    stat={ stat }
                  />
                ))
              }

              <PokemonDetailMoves detail={ detail }/>
            </InformationWrapper>
          </Flex>

        </Layout>
      </PokemonDetailCard>
    </DesktopWrapper>
  )
}

PokemonDetailDesktop.propTypes = propTypes
PokemonDetailDesktop.defaultProps = defaultProps

export default PokemonDetailDesktop
