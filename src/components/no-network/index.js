import React from 'react'
import { Text } from 'components'
import { NoNetworkCard } from './styles'
import { 
  HeaderImg, 
  HeaderImgWrapper 
} from 'domains/pokemon-list/styles'
import { secondary } from 'components/color-mapping'

const NoNetwork = () => (
  <>
    <HeaderImgWrapper style={{ background: secondary }}>
      <HeaderImg 
        src='/header.png'
        alt='pokemon'
      />
    </HeaderImgWrapper>
    <NoNetworkCard>
      <i className="fas fa-wifi fa-5x"/>
      <Text 
        bold
        fontSize='1.5rem'
        fontSizeMobile='1rem'
        margin='1rem 0 0.5rem'
        marginMobile='1rem 0 0.5rem'
      >
        Ups, You lost your internet connection
      </Text>
      <Text>
        Please check your connection again or connext to Wi-Fi
      </Text>
    </NoNetworkCard>
  </>
)

export default NoNetwork
