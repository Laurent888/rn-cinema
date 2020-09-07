import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import NewsMovies from '@screens/MovieScreen/NewsMovies';

const Stack = createStackNavigator();

const CinameNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="newMovies" component={NewsMovies} />
    </Stack.Navigator>
  );
};

export default CinameNavigator;

const styles = StyleSheet.create({});
