import React from 'react';
import { View } from 'react-native';

import ListMovies from '@components/ListMovies';
import { mockData } from '../../../data/mockData';

const NowPlayingScreen = (): JSX.Element => {
  return (
    <View style={{ flex: 1 }}>
      <ListMovies data={mockData} />
    </View>
  );
};

export default NowPlayingScreen;
