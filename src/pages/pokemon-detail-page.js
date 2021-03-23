import React from 'react'
import { PokemonDetailDomain } from 'domains'
import { useNetwork } from 'context/network-provider'
import { NoNetwork } from 'components/'

const PokemonDetailPage = (props) => {
  const { isOnline } = useNetwork()
  
  return(
    isOnline
      ? <PokemonDetailDomain props={ props }/>
      : <NoNetwork />
  )
}

export default PokemonDetailPage
