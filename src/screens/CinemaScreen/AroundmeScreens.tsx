import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AroundmeScreens = () => {
  return (
    <View
      style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}
    >
      <Text style={{ fontSize: 16, color: '#777' }}>
        There are no theatres around you at the moment
      </Text>
    </View>
  );
};

export default AroundmeScreens;
