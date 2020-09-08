import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListMovies from '@components/ListMovies';

import { mockData } from '../../../data/mockData';

const NewScreen = () => {
  const newMoviesList = mockData.filter((item) => item.feature === 'New');

  return (
    <View style={{ flex: 1 }}>
      <ListMovies data={newMoviesList} />
    </View>
  );
};

export default NewScreen;

const styles = StyleSheet.create({});
