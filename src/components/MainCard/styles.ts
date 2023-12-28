import styled from 'styled-components';
import {Pressable, View, Image} from 'react-native';

import {heightPixel, pixelSizeVertical, widthPixel} from '../../utils/metrics';

export const MainWrapper = styled(Pressable)`
  border-bottom-width: ${widthPixel(1)}px;
  padding-bottom: ${pixelSizeVertical(10)}px;
  border-bottom-color: ${({theme}) => theme.colors.neutral[20]};
`;

export const ImageWrapper = styled(View)`
  width: 100%;
  height: ${heightPixel(200)}px;
`;

export const Thumbnail = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const FavButton = styled(Pressable)`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: ${pixelSizeVertical(5)}px;
  background-color: ${({theme}) => theme.colors.dark[10]};
  border-radius: 99px;
`;
