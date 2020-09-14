import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SCREENS } from '@navigation/routeTypes';
import Logo from '@components/Logo';
import HeaderRight from '@components/HeaderRight';
import CinemaTopBarNavigator from './CinemaTopBarNavigator';
import TheatreDetailScreen from '@screens/CinemaScreen/TheatreDetailScreen';
import UsefulInformationScreen from '@screens/CinemaScreen/UsefulInformationScreen';

const Stack = createStackNavigator();

const options = {
  headerTitleAlign: 'center',
  headerTitle: () => <Logo />,
  headerRight: () => <HeaderRight />,
};

const CinameNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="theatres" component={CinemaTopBarNavigator} options={options} />
      <Stack.Screen
        name={SCREENS.THEATRE_DETAIL}
        component={TheatreDetailScreen}
        options={{ headerBackTitleVisible: false }}
      />
      <Stack.Screen name={SCREENS.USEFUL_INFO} component={UsefulInformationScreen} />
    </Stack.Navigator>
  );
};

export default CinameNavigator;
