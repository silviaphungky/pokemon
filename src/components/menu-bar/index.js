import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button, Text } from 'components'
import { 
  PokeBallImg, 
  Wrapper,
  PokeballWrapper, 
  CatchMeText
} from './styles'
import PropTypes from 'proptypes'

const propTypes = {
  isCatching          : PropTypes.bool,
  handleClickPokeBall : PropTypes.func
}

const defaultProps = {
  isCatching          : false,
  handleClickPokeBall : () => {}
}

const MenuBar = ({
  isCatching,
  handleClickPokeBall
}) => {
  const location = useLocation()
  return(
    <Wrapper
      isPadding={ !location.pathname.startsWith('/pokemon') }
    >
      <Link 
        to='/'
        style={{ flex   : '1 1 auto', 
          margin : 'auto' 
        }}
      >
        <Text   
          textAlign='center'
          textTransform={ location.pathname === '/' ? 'uppercase' : 'lowercase' }
          color={ location.pathname === '/' ? 'maroon' : 'black' }
          fontSize='1.1rem'
        >
          <div>
            <i 
              className="fas fa-home fa-2x" 
              style={{ 
                color   : location.pathname === '/' ? 'maroon' : 'black', 
                opacity : '0.8' 
              }}
            />
          </div>
          Pokemon List
        </Text>
      </Link>

      <PokeballWrapper isHide={ !location.pathname.startsWith('/pokemon') } >
        <Button
          color='transparent'
          disabled={ isCatching }
        >
          <PokeBallImg
            isCatching={ isCatching } 
            src='/pokeball.png' 
            alt='catch'
            width='15%'
            onClick={ handleClickPokeBall }
          />
          <CatchMeText 
            bold
            textAlign='center'
          >
            CATCH ME
          </CatchMeText>
        </Button>
      </PokeballWrapper>

      <Link 
        to='/pokedex'
        style={{ flex   : '1 1 auto', 
          margin : 'auto' 
        }}
      >
        <Text 
          textAlign='center'
          textTransform={ location.pathname.startsWith('/pokedex') ? 'uppercase' : 'lowercase' }
          color={ location.pathname.startsWith('/pokedex') ? 'maroon' : 'black' }
          fontSize='1.1rem'
        >
          <div>
            <i 
              className="fas fa-file-invoice fa-2x" 
              style={{ 
                color   : location.pathname.startsWith('/pokedex') ? 'maroon' : 'black',
                opacity : '0.8'  
              }} 
            />
          </div>
          Pokedex
        </Text>
      </Link>
    </Wrapper>
  )
}

MenuBar.propTypes = propTypes
MenuBar.defaultProps = defaultProps

export default MenuBar
