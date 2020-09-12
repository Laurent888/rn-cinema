import React, { useContext } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

import AppNavigator from './src/navigation/AppNavigator';
import { theme } from './src/lib/theme/theme';
import { MovieContext, MovieProvider } from 'context/moviesContext';

const MainApp = () => {
  const { appLoading } = useContext(MovieContext);

  const [fontsLoaded] = useFonts({
    'Roboto-light': require('./assets/fonts/RobotoCondensed-Light.ttf'),
    'Roboto-regular': require('./assets/fonts/RobotoCondensed-Regular.ttf'),
    'Roboto-bold': require('./assets/fonts/RobotoCondensed-Bold.ttf'),
  });

  if (!fontsLoaded || appLoading) return <AppLoading />;

  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <MovieProvider>
        <MainApp />
      </MovieProvider>
    </SafeAreaProvider>
  );
}
