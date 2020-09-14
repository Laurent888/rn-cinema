import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import BookingScreen from '@screens/BookingScreen/BookingScreen';
import HeaderRight from '@components/HeaderRight';
import Logo from '@components/Logo';

const Stack = createStackNavigator();

const BookningNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="bookingLogin"
        component={BookingScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => <Logo />,
          headerRight: () => <HeaderRight />,
        }}
      />
    </Stack.Navigator>
  );
};

export default BookningNavigator;
