import React from 'react';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {RecoilRoot} from 'recoil';

import theme from './src/theme';
import RootNavigation from './src/navigation';

function App(): React.JSX.Element {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
