import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FavoritesTheatresScreen = () => {
  return (
    <View
      style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}
    >
      <Text style={{ fontSize: 16, color: '#777' }}>
        You need to be logged in to view your favorites theatres
      </Text>
    </View>
  );
};

export default FavoritesTheatresScreen;

const styles = StyleSheet.create({});
