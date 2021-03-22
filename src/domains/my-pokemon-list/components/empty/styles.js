import styled from '@emotion/styled'
import { Text } from 'components/'
import { Button } from 'components/'
import { IS_MOBILE_SCREEN } from 'utils/media-queries'

export const Flex = styled.div`
  display: flex;
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