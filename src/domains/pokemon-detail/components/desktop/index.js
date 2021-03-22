import React from 'react'
import { DesktopWrapper, ImageWrapper, InformationWrapper, PokemonDetailCard } from './styles'
import { 
  Badge, 
  Button, 
  Text,
  Layout 
} from 'components'
import { 
  PokemonDetailMoves, 
  PokemonDetailStats, 
  PokemonDetailTypeBadge 
} from 'domains/pokemon-detail/components'
import { Flex } from '../../styles'
import PokemonDetailPreviewImage from '../preview-image'

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
                width='100%'
                color='orange'
                margin='1rem 0'
                onClick={ handleClickPokeBall }
                disabled={ isCatching }
              >
                <Text
                  margin='0.25rem 0'
                  bold
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
              <Flex justifyContent=''>
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

export default PokemonDetailDesktop
