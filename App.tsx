import React, { useContext, useEffect, useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import NetInfo from '@react-native-community/netinfo';
import * as SplashScreen from 'expo-splash-screen';

import AppNavigator from './src/navigation/AppNavigator';
import { theme } from './src/lib/theme/theme';
import { MovieContext, MovieProvider } from 'context/moviesContext';
import { DatesProvider } from '@context/datesContext';
import CustomSnackbar from '@components/CustomSnackbar';

const MainApp = () => {
  const { appLoading } = useContext(MovieContext);
  const [snackbarInfo, setSnackbarInfo] = useState({
    visible: false,
    message: '',
  });

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((networkState) => {
      console.log('Connection type ', networkState.type);
      console.log('Is connected ? ', networkState.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const [fontsLoaded] = useFonts({
    'Roboto-light': require('./assets/fonts/RobotoCondensed-Light.ttf'),
    'Roboto-regular': require('./assets/fonts/RobotoCondensed-Regular.ttf'),
    'Roboto-bold': require('./assets/fonts/RobotoCondensed-Bold.ttf'),
  });

  if (!fontsLoaded || appLoading) return <AppLoading />;

  const hideSplashScreen = async () => {
    await SplashScreen.hideAsync();
  };

  if (!appLoading) {
    console.log('APP LOADING', appLoading);
    hideSplashScreen();
  }

  return (
    <PaperProvider theme={theme}>
      <AppNavigator />

      <CustomSnackbar
        message={snackbarInfo.message}
        visible={snackbarInfo.visible}
        onDismissSnackBar={() => setSnackbarInfo({ message: '', visible: false })}
      />
    </PaperProvider>
  );
};

export default function App() {
  useEffect(() => {
    const asyncSpashScreen = async () => {
      await SplashScreen.preventAutoHideAsync();
    };

    asyncSpashScreen();
  }, []);

  return (
    <SafeAreaProvider>
      <MovieProvider>
        <DatesProvider>
          <MainApp />
        </DatesProvider>
      </MovieProvider>
    </SafeAreaProvider>
  );
}
