import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import MoviesTopBarNavigator from './MoviesTopBarNavigator';
import MovieDetailScreen from '@screens/MovieScreen/MovieDetailScreen';
import { SCREENS } from '@navigation/routeTypes';

const Stack = createStackNavigator();

const MovieNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="moviesList" component={MoviesTopBarNavigator} />
      <Stack.Screen name={SCREENS.MOVIE_DETAIL} component={MovieDetailScreen} />
    </Stack.Navigator>
  );
};

export default MovieNavigator;

const styles = StyleSheet.create({});
