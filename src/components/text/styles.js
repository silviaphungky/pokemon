import styled from '@emotion/styled'
import { IS_MOBILE_SCREEN } from '../../utils/media-queries'

export const Wrapper = styled.div`
  font-size: ${({ fontSize }) => fontSize ? fontSize : '0.875rem'};
  font-weight: ${({ bold }) => bold ? 'bold' : 'normal'};
  margin: ${({ margin }) => margin ? margin : 0};
  color: ${({ color }) => color};

  ${({ textTransform }) => `text-transform: ${textTransform}`};
  ${({ textAlign }) => `text-align: ${textAlign}`};

  ${IS_MOBILE_SCREEN} {
    font-size: ${({ fontSizeMobile }) => fontSizeMobile ? fontSizeMobile : '0.75rem'};
    margin: ${({ marginMobile }) => marginMobile ? marginMobile : 0};
    color: ${({ color }) => color};
  }
`
