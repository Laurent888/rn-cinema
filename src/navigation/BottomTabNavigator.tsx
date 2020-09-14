import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons as McIcon } from '@expo/vector-icons';

import CinameNavigator from './BottomTab/CinemaNavigator/CinemaNavigator';
import NowNavigator from './BottomTab/NowNavigator';
import BookningNavigator from './BottomTab/BookningNavigator';
import { SCREENS } from './routeTypes';

import StorybookUIRoot from '../../storybook/index';
import MovieNavigator from './BottomTab/MovieNavigator/MovieNavigator';
import { theme } from '@lib/theme/theme';

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
          } else if (route.name === 'Booking') {
            iconName = focused ? 'ticket' : 'ticket-outline';
          } else if (route.name === 'Storybook') {
            iconName = 'draw';
          }

          // You can return any component that you like here!
          return <McIcon name={iconName} size={25} color={color} />;
        },
        tabBarColor: '#fff',
      })}
      inactiveColor="#ccc"
      activeColor={theme.colors.primary}
    >
      <Tab.Screen name={SCREENS.MOVIE} component={MovieNavigator} />
      <Tab.Screen name={SCREENS.CINEMA} component={CinameNavigator} />
      <Tab.Screen name={SCREENS.NOW} component={NowNavigator} />
      <Tab.Screen name={SCREENS.BOOKING} component={BookningNavigator} />

      {/* DEV MODE: Storybook */}
      {/* <Tab.Screen name="Storybook" component={StorybookUIRoot} /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
