import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

import AppNavigator from './src/navigation/AppNavigator';
import { theme } from './src/lib/theme/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-light': require('./assets/fonts/RobotoCondensed-Light.ttf'),
    'Roboto-regular': require('./assets/fonts/RobotoCondensed-Regular.ttf'),
    'Roboto-bold': require('./assets/fonts/RobotoCondensed-Bold.ttf'),
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
}
