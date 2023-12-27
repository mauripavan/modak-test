import {View} from 'react-native';
import styled from 'styled-components';

export const StyledView = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.green[0]};
`;
