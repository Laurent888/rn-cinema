import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import NowScreen from '@screens/NowScreen/NowScreen';
import HeaderRight from '@components/HeaderRight';
import Logo from '@components/Logo';

const Stack = createStackNavigator();

const NowNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="nowMovies"
        component={NowScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => <Logo />,
          headerRight: () => <HeaderRight />,
        }}
      />
    </Stack.Navigator>
  );
};

export default NowNavigator;

const styles = StyleSheet.create({});
