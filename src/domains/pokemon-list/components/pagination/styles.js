import styled from '@emotion/styled'
import { IS_MOBILE_SCREEN } from 'utils/media-queries'

export const Flex = styled.div`
  display: flex;
  display: -webkit-box;   /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox;  /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
  justify-content: center;
  margin: 1.5rem 0 1rem;

  ${IS_MOBILE_SCREEN} {
    margin: 1rem 0;
  }
`

