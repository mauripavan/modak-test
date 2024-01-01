import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from 'styled-components';

import SingleItemScreen from '../screens/singleItem';
import HomeScreen from '../screens/home';
import {fontPixel} from '../utils/metrics';

const HomeNavigation = () => {
  const HomeStack = createNativeStackNavigator();
  const {fonts, colors} = useTheme();

  return (
    <HomeStack.Navigator initialRouteName='HomeScreen'>
      <HomeStack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          title: 'Art Works',
          headerTitleStyle: {
            fontFamily: fonts.bold,
            fontSize: fontPixel(22),
            color: colors.dark[0],
          },
        }}
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
