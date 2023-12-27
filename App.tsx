import React from 'react';
import {Text, View} from 'react-native';
import styled, {ThemeProvider} from 'styled-components';

import theme from './src/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <StyledView>
        <Text>Styled Components initial config</Text>
      </StyledView>
    </ThemeProvider>
  );
}

export default App;

const StyledView = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.green[0]};
`;
