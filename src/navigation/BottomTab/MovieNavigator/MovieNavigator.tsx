import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderRight from '@components/HeaderRight';
import MovieDetailScreen from '@screens/MovieScreen/MovieDetailScreen';
import { SCREENS } from '@navigation/routeTypes';
import MoviesTopBarNavigator from './MoviesTopBarNavigator';

import logo from '../../../../assets/logo.png';

const Stack = createStackNavigator();

const Logo = () => (
  <View style={{ width: 85, height: 85, transform: [{ translateY: -5 }] }}>
    <Image source={logo} resizeMode="contain" style={{ width: '100%', height: '100%' }} />
  </View>
);

const MovieNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: () => <Logo />,
        headerRight: () => <HeaderRight />,
      }}
    >
      <Stack.Screen name="moviesList" component={MoviesTopBarNavigator} />
      <Stack.Screen name={SCREENS.MOVIE_DETAIL} component={MovieDetailScreen} />
    </Stack.Navigator>
  );
};

export default MovieNavigator;
