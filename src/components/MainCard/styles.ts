import styled from 'styled-components';
import {Pressable, ImageBackground} from 'react-native';

import {heightPixel, pixelSizeVertical, widthPixel} from '../../utils/metrics';

export const MainWrapper = styled(Pressable)`
  border-bottom-width: ${widthPixel(1)}px;
  padding-bottom: ${pixelSizeVertical(10)}px;
  border-bottom-color: ${({theme}) => theme.colors.neutral[20]};
`;

export const Thumbnail = styled(ImageBackground)`
  width: 100%;
  height: ${heightPixel(200)}px;
`;
