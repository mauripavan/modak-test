import React from 'react';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {RecoilRoot} from 'recoil';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import theme from './src/theme';
import RootNavigation from './src/navigation';

function App(): React.JSX.Element {
  return (
    <RecoilRoot>
      <GestureHandlerRootView style={{flex: 1}}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </ThemeProvider>
      </GestureHandlerRootView>
    </RecoilRoot>
  );
}

export default App;
