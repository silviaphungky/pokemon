import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button, Text } from '..'
import { PokeBallImg, Wrapper } from './styles'

const MenuBar = ({
  isCatching,
  handleClickPokeBall
}) => {
  const location = useLocation()
  return(
    <Wrapper>
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
      <div style={{
        display   : location.pathname.startsWith('/pokemon') ? 'block' : 'none',
        textAlign : 'center' 
      }}
      >
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
        </Button>
        <Text 
          marginMobile='0.5rem 0'
          bold
          textAlign='center'
        >
          CATCH ME
        </Text>
      </div>
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

export default MenuBar
