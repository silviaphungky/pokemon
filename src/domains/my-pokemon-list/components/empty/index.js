import React from 'react'
import { Link } from 'react-router-dom'
import {
  PikachuImg,
  EmptyText,
  Flex,
  RedirectButton
} from './styles'

const MyPokemonListEmpty = () => (
  <>
    <PikachuImg 
      src='pikachu.png'  
      alt='pikachu'
    />
    <EmptyText
      textAlign='center'
      fontSize='1.5rem'
      fontSizeMobile='1rem'
    >
                  You don't have any Pokemon.
    </EmptyText>
    <EmptyText               
      textAlign='center'
      fontSize='1.5rem'
      fontSizeMobile='1rem'
      margin='0.75rem 0 1rem'
      marginMobile='0.5rem 0 1rem'
    >
                Catch one which you want!
    </EmptyText>
    <Flex justifyContent='center'>
      <Link to='/'>
        <RedirectButton larger>
          <EmptyText
            fontSize='1.5rem'
            fontSizeMobile='1rem'
          >
                      Go to catch
          </EmptyText>
        </RedirectButton>
      </Link>
    </Flex>
  </>
)

export default MyPokemonListEmpty
