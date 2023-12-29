import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SingleItemScreen from '../screens/singleItem';
import FavouritesScreen from '../screens/favourites';

const FavouritesNavigation = () => {
  const FavouritesStack = createNativeStackNavigator();

  return (
    <FavouritesStack.Navigator initialRouteName='FavouritesScreen'>
      <FavouritesStack.Screen
        name='FavouriteScreen'
        component={FavouritesScreen}
        options={{headerShown: false}}
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
