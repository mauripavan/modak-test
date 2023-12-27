import {Text} from 'react-native';
import styled from 'styled-components';

import {fontPixel} from '../../utils/metrics';
import {ITypographyProps} from './types';

const TextRegular = styled(Text)<ITypographyProps>`
  font-size: ${({fontSize}) =>
    fontSize ? fontPixel(fontSize) : fontPixel(14)}px;
  color: ${({color, theme}) => (color ? color : theme.colors.black)};
  font-family: ${({theme}) => theme.fonts.regular};
`;

const TextMedium = styled(Text)<ITypographyProps>`
  font-size: ${({fontSize}) =>
    fontSize ? fontPixel(fontSize) : fontPixel(12)}px;
  color: ${({color, theme}) => (color ? color : theme.colors.black)};
  font-family: ${({theme}) => theme.fonts.medium};
`;

const TextSemiBold = styled(Text)<ITypographyProps>`
  font-size: ${({fontSize}) =>
    fontSize ? fontPixel(fontSize) : fontPixel(12)}px;
  color: ${({color, theme}) => (color ? color : theme.colors.black)};
  font-family: ${({theme}) => theme.fonts.semibold};
`;

const TextBold = styled(Text)<ITypographyProps>`
  font-size: ${({fontSize}) =>
    fontSize ? fontPixel(fontSize) : fontPixel(12)}px;
  color: ${({color, theme}) => (color ? color : theme.colors.black)};
  font-family: ${({theme}) => theme.fonts.bold};
`;

const TextBlack = styled(Text)<ITypographyProps>`
  font-size: ${({fontSize}) =>
    fontSize ? fontPixel(fontSize) : fontPixel(12)}px;
  color: ${({color, theme}) => (color ? color : theme.colors.black)};
  font-family: ${({theme}) => theme.fonts.black};
`;

export {TextRegular, TextMedium, TextSemiBold, TextBold, TextBlack};
