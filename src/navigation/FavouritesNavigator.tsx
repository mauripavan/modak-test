import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from 'styled-components';

import SingleItemScreen from '../screens/singleItem';
import FavouritesScreen from '../screens/favourites';
import {fontPixel} from '../utils/metrics';

const FavouritesNavigation = () => {
  const FavouritesStack = createNativeStackNavigator();
  const {fonts, colors} = useTheme();

  return (
    <FavouritesStack.Navigator initialRouteName='FavouritesScreen'>
      <FavouritesStack.Screen
        name='FavouriteScreen'
        component={FavouritesScreen}
        options={{
          title: 'Saved Art Works',
          headerTitleStyle: {
            fontFamily: fonts.bold,
            fontSize: fontPixel(22),
            color: colors.dark[0],
          },
        }}
      />
      <FavouritesStack.Screen
        name='SingleItemScreen'
        component={SingleItemScreen}
        options={{headerShown: false}}
      />
    </FavouritesStack.Navigator>
  );
};

export default FavouritesNavigation;
