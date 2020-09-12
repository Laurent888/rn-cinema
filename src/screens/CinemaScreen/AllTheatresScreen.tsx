import React, { useContext } from 'react';
import { View } from 'react-native';

import ListTheatres from '@components/ListTheatres';
import { MovieContext } from '@context/moviesContext';

const AllTheatresScreen = (): JSX.Element => {
  const { theatres } = useContext(MovieContext);

  return (
    <View style={{ flex: 1 }}>
      <ListTheatres data={theatres} />
    </View>
  );
};

export default AllTheatresScreen;
