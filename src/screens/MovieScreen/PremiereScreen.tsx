import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListMovies from '@components/ListMovies';
import { mockData } from '../../../data/mockData';

const PremiereScreen = () => {
  const premiereMovies = mockData.filter((item) => item.feature === 'Premiere');
  return (
    <View style={{ flex: 1 }}>
      <ListMovies data={premiereMovies} />
    </View>
  );
};

export default PremiereScreen;

const styles = StyleSheet.create({});
