import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import TheatreItem from './TheatreItem';
import { TheaterProps } from '@lib/types/types';

interface ListTheatresProps {
  data: TheaterProps[];
}

const ListTheatres = ({ data }: ListTheatresProps): JSX.Element => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <TheatreItem name={item.name} />}
      />
    </View>
  );
};

export default ListTheatres;

const styles = StyleSheet.create({});
