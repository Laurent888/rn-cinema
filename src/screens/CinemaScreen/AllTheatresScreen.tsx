import React from 'react';
import { View } from 'react-native';

import ListTheatres from '@components/ListTheatres';
import { mockTheaters } from '../../../data/mockData';

const AllTheatresScreen = (): JSX.Element => {
  return (
    <View style={{ flex: 1 }}>
      <ListTheatres data={mockTheaters} />
    </View>
  );
};

export default AllTheatresScreen;
