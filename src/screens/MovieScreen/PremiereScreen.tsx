import React, { useContext } from 'react';
import { View } from 'react-native';

import ListMovies from '@components/ListMovies';
import { MovieContext } from 'context/moviesContext';

const PremiereScreen = (): JSX.Element => {
  const { movies } = useContext(MovieContext);

  const premiereMovies = movies.filter((item) => item.feature === 'Premiere');
  return (
    <View style={{ flex: 1 }}>
      <ListMovies data={premiereMovies} />
    </View>
  );
};

export default PremiereScreen;
