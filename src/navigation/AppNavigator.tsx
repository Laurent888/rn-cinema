import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from '@screens/SearchScreen';
import BottomTabNavigator from './BottomTabNavigator';
import { SCREENS } from './routeTypes';
import LoginStack from './LoginStack';
import AccountNavigator from './AccountNavigator';
import PersistNavigationContainer from './PersistNavigationContainer';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <PersistNavigationContainer>
      <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREENS.ROOT} component={BottomTabNavigator} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name={SCREENS.SIGNINUP} component={LoginStack} />
        <Stack.Screen name="accountNavigator" component={AccountNavigator} />
      </Stack.Navigator>
    </PersistNavigationContainer>
  );
};

export default AppNavigator;
