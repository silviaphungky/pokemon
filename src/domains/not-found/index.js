import React from 'react'
import { Link } from 'react-router-dom'
import { Text } from 'components'
import { secondary } from 'components/color-mapping'
import { 
  HeaderImg, 
  HeaderImgWrapper 
} from 'domains/pokemon-list/styles'
import { 
  Img, 
  NotFoundCard, 
  RedirectBtn 
} from './styles'

const NotFoundDomain = () => (
  <>
    <HeaderImgWrapper 
      style={{ background: secondary }}
    >
      <HeaderImg src='header.png'/>
    </HeaderImgWrapper>
    <NotFoundCard>
      <Img 
        src='/404.jpg'
        alt='not found'
      />
      <Text
        bold
        textAlign='center'
        fontSize='1.5rem'
        fontSizeMobile='1rem'
      >
      Whoops! Are you lost?
      </Text>

      <RedirectBtn 
        larger
        color={ secondary }
      >
        <Link to='/'>
          <Text>
            Back to Homepage
          </Text>
        </Link>
      </RedirectBtn>

    </NotFoundCard>
  </>
)

export default NotFoundDomain
