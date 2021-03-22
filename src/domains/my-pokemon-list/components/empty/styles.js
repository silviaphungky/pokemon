import styled from '@emotion/styled'
import { Text } from 'components/'
import { Button } from 'components/'
import { IS_MOBILE_SCREEN } from 'utils/media-queries'

export const Flex = styled.div`
  display: flex;
  display: -webkit-box;   /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox;  /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
  margin: 0.3rem 0;
  justify-content: ${({ justifyContent }) => justifyContent};
`

export const PikachuImg = styled.img`
  width: 10%;
  height: auto;
  margin: 10vh auto 1rem;
  display: block;

  ${IS_MOBILE_SCREEN}{
    width: 40%;
  }
`

export const EmptyText = styled(Text)`
  color: black;

  ${IS_MOBILE_SCREEN}{
    color: #fff;
  }
`

export const RedirectButton = styled(Button)`
  background: rgba(149, 2, 23, 1);
  border: none;

  ${IS_MOBILE_SCREEN}{
    background: rgba(149, 2, 23, 0.8);
  }
`