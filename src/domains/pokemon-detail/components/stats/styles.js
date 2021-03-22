import styled from '@emotion/styled'
import { grey } from 'components/color-mapping'
import { IS_MOBILE_SCREEN } from 'utils/media-queries'

export const StatsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`

export const Flex = styled.div`
  display: flex;
  flex: 0 0 50%;
`

export const AchieveBar = styled.div`
  height: 0.5rem;
  background: orange;
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