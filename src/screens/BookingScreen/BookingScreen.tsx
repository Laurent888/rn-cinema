import { ATheme } from '@lib/theme/theme';
import { SCREENS } from '@navigation/routeTypes';
import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, useTheme } from 'react-native-paper';

const useStyle = (theme: ATheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    text: {
      paddingVertical: 20,
      color: '#888',
      width: '70%',
      textAlign: 'center',
    },
  });

interface BookingScreenProps {
  navigation: NavigationProp<any, any>;
}

const BookingScreen = ({ navigation }: BookingScreenProps): JSX.Element => {
  const s = useStyle(useTheme());

  const navigateTo = (name: string) => {
    navigation.navigate(name);
  };

  return (
    <View style={s.container}>
      <Text style={s.text}>Please connect first in order to see your current bookings</Text>
      <Button mode="contained" onPress={() => navigateTo(SCREENS.SIGNINUP)}>
        LOGIN
      </Button>
    </View>
  );
};

export default BookingScreen;
