import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderRight from '@components/HeaderRight';
import MovieDetailScreen from '@screens/MovieScreen/MovieDetailScreen';
import { SCREENS } from '@navigation/routeTypes';
import MoviesTopBarNavigator from './MoviesTopBarNavigator';
import Logo from '@components/Logo';

const Stack = createStackNavigator();

const MovieNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="moviesList"
        component={MoviesTopBarNavigator}
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => <Logo />,
          headerRight: () => <HeaderRight />,
        }}
      />
      <Stack.Screen name={SCREENS.MOVIE_DETAIL} component={MovieDetailScreen} />
    </Stack.Navigator>
  );
};

export default MovieNavigator;
