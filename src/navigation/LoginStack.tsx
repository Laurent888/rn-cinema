import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '@screens/LoginScreen';
import RegisterScreen from '@screens/RegisterScreen';

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={LoginScreen} options={{ headerTitle: 'CONNECTION' }} />
      <Stack.Screen
        name="register"
        component={RegisterScreen}
        options={{ headerTitle: 'CONNECTION' }}
      />
    </Stack.Navigator>
  );
};

export default LoginStack;
