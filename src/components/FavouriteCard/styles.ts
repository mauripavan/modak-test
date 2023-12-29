import {Pressable, Image, View} from 'react-native';
import styled from 'styled-components';

import {heightPixel, pixelSizeVertical, widthPixel} from '../../utils/metrics';

export const MainContainer = styled(Pressable)`
  flex-direction: row;
  column-gap: ${widthPixel(10)}px;
  align-items: center;
  padding-bottom: ${pixelSizeVertical(15)}px;
  border-bottom-width: ${widthPixel(1)}px;
  border-bottom-color: ${({theme}) => theme.colors.neutral[0]};
`;

export const Thumbnail = styled(Image)`
  height: ${heightPixel(80)}px;
  width: ${widthPixel(130)}px;
`;

export const DataContainer = styled(View)`
  flex-grow: 1;
  flex: 1;
`;
