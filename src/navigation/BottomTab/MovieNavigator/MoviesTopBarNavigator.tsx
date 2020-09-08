import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SCREENS } from '../../routeTypes';
import PremiereScreen from '@screens/MovieScreen/PremiereScreen';
import NowPlayingScreen from '@screens/MovieScreen/NowPlayingScreen';
import NewScreen from '@screens/MovieScreen/NewsMovies';
import { useTheme } from 'react-native-paper';

const TopTab = createMaterialTopTabNavigator();

const MoviesTopBarNavigator = () => {
  const { colors } = useTheme();

  const tabBarOptions = {
    activeTintColor: colors.primary,
    indicatorStyle: { backgroundColor: colors.primary, height: 3 },
    labelStyle: { fontSize: 15, fontFamily: 'Roboto-regular' },
  };

  return (
    <TopTab.Navigator tabBarOptions={tabBarOptions}>
      <TopTab.Screen name={SCREENS.NEW} component={NewScreen} />
      <TopTab.Screen name={SCREENS.NOW_PLAYING} component={NowPlayingScreen} />
      <TopTab.Screen name={SCREENS.PREMIERE} component={PremiereScreen} />
    </TopTab.Navigator>
  );
};

export default MoviesTopBarNavigator;
