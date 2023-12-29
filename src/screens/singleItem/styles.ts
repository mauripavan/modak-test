import {View, Image, Pressable} from 'react-native';
import styled from 'styled-components';

import {
  heightPixel,
  pixelSizeHorizontal,
  widthPixel,
  pixelSizeVertical,
} from '../../utils/metrics';

export const ImageWrapper = styled(View)`
  width: 100%;
  height: ${heightPixel(500)}px;
`;
export const Thumbnail = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const InfoContainer = styled(View)`
  padding-horizontal: ${pixelSizeHorizontal(16)}px;
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
