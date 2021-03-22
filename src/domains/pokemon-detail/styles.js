import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { IS_MOBILE_SCREEN } from '../../utils/media-queries'

export const DesktopWrapper = styled.div`
  display: block;

  ${IS_MOBILE_SCREEN} {
    display: none;
  }
`

export const MobileWrapper = styled.div`
  display: none;

  ${IS_MOBILE_SCREEN} {
    display: block;
  }
`

export const jump  = keyframes`
  0%   {transform: translate3d(0,0,0) scale3d(1,1,1);}
  40%  {transform: translate3d(0,10%,0) scale3d(.7,1.5,1);}
  100% {transform: translate3d(0,50%,0) scale3d(1.5,.7,1);}
`

export const PokeImg = styled.img`
  padding: 1rem;
  transform-origin: 50% 50%;
  width: 50%;
  height: auto;
  display: block; 
  margin: auto;

  ${IS_MOBILE_SCREEN} {
    ${({ isCatching }) => isCatching ? { animation: 'none' } : { animation: `${jump} 1.25s linear alternate infinite` }};
    width: 50%;
    display: block; 
    margin: -1rem auto 3rem;
  }
`

export const Flex = styled.div`
  display : flex;
  display: -webkit-box;   /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox;  /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'flex-start'};
  margin: 0.5rem 0;
`

export const PokemonName = styled.h3`
  padding: 2rem 0 1rem;
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;
  background: orange;
  height: 4rem;

  ${IS_MOBILE_SCREEN} {
    text-align: center;
    padding: 1rem 0;
    height: 3rem;
  }
`

export const Grid = styled.div`
  display : grid;   
  grid-template-columns : repeat(4, 1fr);
  grid-gap : 1rem; 

  ${IS_MOBILE_SCREEN} {
    grid-template-columns : repeat(2, 1fr);
    grid-gap : 0.25rem; 
  }
`
