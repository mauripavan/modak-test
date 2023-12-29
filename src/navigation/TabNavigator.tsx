import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'styled-components';

import HomeScreen from '../screens/home';
import FavouritesScreen from '../screens/favourites';
import {icons} from '../../assets/icons';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const {colors, fonts} = useTheme();
  const {FavIcon, HomeIcon} = icons;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.dark[20],
          position: 'absolute',
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <HomeIcon
              fill={focused ? colors.white : colors.gray[10]}
              width={30}
              height={30}
              strokeWidth={1}
            />
          ),
          tabBarActiveTintColor: colors.white,
          tabBarInactiveTintColor: colors.gray[10],
          tabBarLabelStyle: {fontFamily: fonts.medium, fontSize: 11},
        }}
      />
      <Tab.Screen
        name='Favourites'
        component={FavouritesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <FavIcon
              fill={focused ? colors.white : colors.gray[10]}
              width={30}
              height={30}
              strokeWidth={1}
            />
          ),
          tabBarActiveTintColor: colors.white,
          tabBarInactiveTintColor: colors.gray[10],
          tabBarLabelStyle: {fontFamily: fonts.medium, fontSize: 11},
          tabBarLabel: 'My Favourites',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
