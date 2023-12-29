import {Dimensions, View} from 'react-native';
import styled from 'styled-components';

import {pixelSizeHorizontal} from '../../utils/metrics';

export const MainContainer = styled(View)`
  flex: 1;
  align-items: center;
  background-color: ${({theme}) => theme.colors.white};
  padding-horizontal: ${pixelSizeHorizontal(20)}px;
  padding-top: ${Dimensions.get('window').height / 4}px;
`;
