import {View, Image, Pressable, ImageBackground} from 'react-native';
import styled from 'styled-components';

import {
  heightPixel,
  pixelSizeHorizontal,
  widthPixel,
  pixelSizeVertical,
} from '../../utils/metrics';
import {IInfoContainerProps} from './types';

export const ImageWrapper = styled(ImageBackground)`
  width: 100%;
  height: ${heightPixel(500)}px;
`;
export const Thumbnail = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const InfoContainer = styled(View)<IInfoContainerProps>`
  padding-horizontal: ${pixelSizeHorizontal(16)}px;
  padding-bottom: ${({paddingBottom}) => paddingBottom}px;
`;

export const InfoSubContainer = styled(View)`
  border-top-width: ${widthPixel(1)}px;
  border-top-color: ${({theme}) => theme.colors.neutral[30]};
  padding-vertical: ${pixelSizeVertical(5)}px;
`;

export const BackButton = styled(Pressable)`
  position: absolute;
  top: 50px;
  left: 16px;
  background-color: ${({theme}) => theme.colors.dark[10]};
  height: ${heightPixel(30)}px;
  width: ${widthPixel(30)}px;
  z-index: 99;
  justify-content: center;
  align-items: center;
  border-radius: 99px;
`;

export const FavButton = styled(Pressable)`
  background-color: ${({theme}) => theme.colors.dark[10]};
  position: absolute;
  top: 50px;
  right: 16px;
  border-radius: 99px;
  height: ${heightPixel(30)}px;
  width: ${widthPixel(30)}px;
  z-index: 99;
  justify-content: center;
  align-items: center;
`;
