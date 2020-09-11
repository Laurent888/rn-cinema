import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTheme } from 'react-native-paper';
import { SCREENS } from '@navigation/routeTypes';

import AroundmeScreens from '@screens/CinemaScreen/AroundmeScreens';
import FavoritesTheatresScreen from '@screens/CinemaScreen/FavoritesTheatresScreen';
import AllTheatresScreen from '@screens/CinemaScreen/AllTheatresScreen';

const TopTab = createMaterialTopTabNavigator();

const CinemaTopBarNavigator = () => {
  const { colors } = useTheme();

  const tabBarOptions = {
    activeTintColor: colors.primary,
    indicatorStyle: { backgroundColor: colors.primary, height: 3 },
    labelStyle: { fontSize: 15, fontFamily: 'Roboto-regular' },
  };

  return (
    <TopTab.Navigator tabBarOptions={tabBarOptions}>
      <TopTab.Screen name={SCREENS.AROUND_ME} component={AroundmeScreens} />
      <TopTab.Screen name={SCREENS.FAVORITES_CINEMA} component={FavoritesTheatresScreen} />
      <TopTab.Screen name={SCREENS.ALL_CINEMAS} component={AllTheatresScreen} />
    </TopTab.Navigator>
  );
};

export default CinemaTopBarNavigator;
