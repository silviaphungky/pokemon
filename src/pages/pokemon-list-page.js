import { MenuBar } from 'components/'
import React from 'react'
import { PokemonListDomain } from '../domains'

const PokemonListPage = () => (
  <>
    <MenuBar />
    <PokemonListDomain />
  </>
)

export default PokemonListPage
