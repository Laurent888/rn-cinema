import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ListMovies from '@components/ListMovies';
import { mockData } from '../../../data/mockData';

const NowPlayingScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ListMovies data={mockData} />
    </View>
  );
};

export default NowPlayingScreen;

const styles = StyleSheet.create({});
