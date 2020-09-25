import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SearchScreen from '@screens/SearchScreen';
import BottomTabNavigator from './BottomTabNavigator';
import { SCREENS } from './routeTypes';
import LoginStack from './LoginStack';
import AccountNavigator from './AccountNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREENS.ROOT} component={BottomTabNavigator} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name={SCREENS.SIGNINUP} component={LoginStack} />
        <Stack.Screen name="accountNavigator" component={AccountNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
