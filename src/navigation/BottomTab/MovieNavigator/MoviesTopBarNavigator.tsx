import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SCREENS } from '../../routeTypes';
import PremiereScreen from '@screens/MovieScreen/PremiereScreen';
import NowPlayingScreen from '@screens/MovieScreen/NowPlayingScreen';
import NewScreen from '@screens/MovieScreen/NewsMovies';

const TopTab = createMaterialTopTabNavigator();

const MoviesTopBarNavigator = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name={SCREENS.NEW} component={NewScreen} />
      <TopTab.Screen name={SCREENS.NOW_PLAYING} component={NowPlayingScreen} />
      <TopTab.Screen name={SCREENS.PREMIERE} component={PremiereScreen} />
    </TopTab.Navigator>
  );
};

export default MoviesTopBarNavigator;
