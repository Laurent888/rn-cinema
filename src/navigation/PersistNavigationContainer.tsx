import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { captureErrors } from '@lib/utils/log';

// eslint-disable-next-line
interface PersistNavigationContainerProps
  extends React.ComponentProps<typeof NavigationContainer> {}

const PERSIST_KEY = 'navState';

const PersistNavigationContainer = ({ ...others }: PersistNavigationContainerProps) => {
  const [isReady, setIsReady] = useState(__DEV__ ? false : true);
  const [initialState, setInitialState] = useState();

  useEffect(() => {
    const restoreState = async () => {
      try {
        const res = await AsyncStorage.getItem(PERSIST_KEY);

        if (!res) {
          setIsReady(true);
        } else {
          setInitialState(JSON.parse(res));
          setIsReady(true);
        }
      } catch (error) {
        captureErrors('PersistNavContainer', error);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer
      {...others}
      initialState={initialState}
      onStateChange={(state) => AsyncStorage.setItem(PERSIST_KEY, JSON.stringify(state))}
    />
  );
};

export default PersistNavigationContainer;
