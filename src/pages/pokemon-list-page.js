import React from 'react'
import { MenuBar, NoNetwork } from 'components'
import { PokemonListDomain } from 'domains'
import { useNetwork } from 'context/network-provider'

const PokemonListPage = () => {

  const { isOnline } = useNetwork()

  return(
    isOnline
      ? (
        <>
          <MenuBar />
          <PokemonListDomain />
        </>
      )
      : <NoNetwork />
  )
}

export default PokemonListPage
