import { useNetwork } from 'context/network-provider'
import React from 'react'
import { MenuBar, NoNetwork } from 'components'
import { MyPokemonListDomain } from 'domains'

const MyPokemonListPage = () => {

  const { isOnline } = useNetwork()

  return(
    isOnline
      ? (
        <>
          <MyPokemonListDomain />
          <MenuBar />
        </>
      )
      : <NoNetwork />
  )
}

export default MyPokemonListPage
