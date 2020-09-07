import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons as McIcon } from '@expo/vector-icons';

import CinameNavigator from './BottomTab/CinemaNavigator';
import NowNavigator from './BottomTab/NowNavigator';
import BookningNavigator from './BottomTab/BookningNavigator';
import { SCREENS } from './routeTypes';
import MoviesTopBarNavigator from './BottomTab/MovieNavigator/MoviesTopBarNavigator';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName = 'cloud-question';

          if (route.name === 'Movie') {
            iconName = focused ? 'play-circle' : 'play-circle-outline';
          } else if (route.name === 'Cinema') {
            iconName = 'chair-rolling';
          } else if (route.name === 'Now') {
            iconName = focused ? 'clock' : 'clock-outline';
          } else if (route.name === 'Bookning') {
            iconName = focused ? 'ticket' : 'ticket-outline';
          }

          // You can return any component that you like here!
          return <McIcon name={iconName} size={25} color={color} />;
        },
        tabBarColor: '#fff',
      })}
      inactiveColor="#ccc"
      activeColor="#3c27aa"
    >
      <Tab.Screen name={SCREENS.MOVIE} component={MoviesTopBarNavigator} />
      <Tab.Screen name={SCREENS.CINEMA} component={CinameNavigator} />
      <Tab.Screen name={SCREENS.NOW} component={NowNavigator} />
      <Tab.Screen name={SCREENS.BOOKING} component={BookningNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
