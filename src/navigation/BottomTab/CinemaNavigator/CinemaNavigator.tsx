import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Logo from '@components/Logo';
import HeaderRight from '@components/HeaderRight';
import CinemaTopBarNavigator from './CinemaTopBarNavigator';

const Stack = createStackNavigator();

const CinameNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: () => <Logo />,
        headerRight: () => <HeaderRight />,
      }}
    >
      <Stack.Screen name="theatres" component={CinemaTopBarNavigator} />
    </Stack.Navigator>
  );
};

export default CinameNavigator;
