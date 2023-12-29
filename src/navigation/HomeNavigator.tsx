import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SingleItemScreen from '../screens/singleItem';
import HomeScreen from '../screens/home';

const HomeNavigation = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator initialRouteName='HomeScreen'>
      <HomeStack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name='SingleItemScreen'
        component={SingleItemScreen}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;
