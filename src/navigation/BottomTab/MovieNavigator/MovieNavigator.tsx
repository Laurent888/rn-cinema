import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import NewsMovies from '@screens/MovieScreen/NewsMovies';

const Stack = createStackNavigator();

const MovieNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="newMovies" component={NewsMovies} />
    </Stack.Navigator>
  );
};

export default MovieNavigator;

const styles = StyleSheet.create({});
