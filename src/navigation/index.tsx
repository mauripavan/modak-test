import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SingleItemScreen from '../screens/singleItem';
import TabNavigator from './TabNavigator';

const RootNavigation = () => {
  const RootStack = createNativeStackNavigator();

  return (
    <RootStack.Navigator initialRouteName='TabNavigator'>
      <RootStack.Screen
        name='TabNavigator'
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='SingleItemScreen'
        component={SingleItemScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
