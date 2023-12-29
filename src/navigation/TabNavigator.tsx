import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'styled-components';

import {icons} from '../../assets/icons';
import HomeNavigation from './HomeNavigator';
import FavouritesNavigation from './FavouritesNavigator';

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
        component={HomeNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <HomeIcon
              fill={focused ? colors.white : colors.gray[10]}
              width={30}
              height={30}
            />
          ),
          tabBarActiveTintColor: colors.white,
          tabBarInactiveTintColor: colors.gray[10],
          tabBarLabelStyle: {fontFamily: fonts.medium, fontSize: 11},
        }}
      />
      <Tab.Screen
        name='Favourites'
        component={FavouritesNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <FavIcon
              fill={'transparent'}
              stroke={focused ? colors.white : colors.gray[10]}
              width={30}
              height={30}
              strokeWidth={2}
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
