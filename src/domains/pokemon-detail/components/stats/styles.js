import styled from '@emotion/styled'
import { 
  blue, 
  grey 
} from 'components/color-mapping'
import { IS_MOBILE_SCREEN } from 'utils/media-queries'

export const StatsWrapper = styled.div`
  display: flex;
  display: -webkit-box;   /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox;  /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
  align-items: center;
  margin: 0.5rem 0;
`

export const Flex = styled.div`
  display: flex;
  display: -webkit-box;   /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox;  /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
  flex: 0 0 50%;
`

export const AchieveBar = styled.div`
  height: 0.5rem;
  background: ${blue};
  flex: 0 0 ${({ percentage }) => percentage}%;

  ${IS_MOBILE_SCREEN}{
    background: black;
  }
`

export const UnachieveBar = styled.div`
  height: 0.5rem;
  background: ${grey};
  flex: 0 0 ${({ percentage }) => percentage}%;
`