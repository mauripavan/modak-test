import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/home';

const RootNavigation = () => {
  const RootStack = createNativeStackNavigator();

  return (
    <RootStack.Navigator initialRouteName='HomeScreen'>
      <RootStack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
