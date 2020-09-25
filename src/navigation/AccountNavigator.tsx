import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { SCREENS } from './routeTypes';
import MyAccountScreen from '@screens/MyAccountScreen/MyAccountScreen';
import MyInformations from '@screens/MyInformations';

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SCREENS.MY_ACCOUNT} component={MyAccountScreen} />
      <Stack.Screen name={SCREENS.MY_INFORMATIONS} component={MyInformations} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;

const styles = StyleSheet.create({});
