import {View} from 'react-native';
import styled from 'styled-components';

import {widthPixel, pixelSizeVertical} from '../../utils/metrics';

export const MainContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  border-bottom-width: ${widthPixel(1)}px;
  border-bottom-color: ${({theme}) => theme.colors.neutral[0]};
  padding-vertical: ${pixelSizeVertical(10)}px;
`;
