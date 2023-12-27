import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from 'styled-components';

import HomeScreen from '../screens/home';

const RootNavigation = () => {
  const RootStack = createNativeStackNavigator();
  const {colors} = useTheme();

  return (
    <RootStack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.white,
        },
      }}>
      <RootStack.Screen name='HomeScreen' component={HomeScreen} />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
