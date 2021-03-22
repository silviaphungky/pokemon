import React from 'react'
import { Text } from '..'
import { LoadingImg } from './styles'

const Loading = () => (
  <>
    <LoadingImg
      src='/pikachu.png' 
      alt='loading'
    />
    <Text
      color='white'
      margin='1.5rem 0 5rem'
      marginMobile='0.75rem 0 3rem'
      textAlign='center'
    >
      Wait me...
    </Text>
  </>
)

export default Loading
