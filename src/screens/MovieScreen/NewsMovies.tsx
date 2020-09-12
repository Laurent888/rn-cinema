import React, { useContext } from 'react';
import { View } from 'react-native';
import ListMovies from '@components/ListMovies';

import { MovieContext } from 'context/moviesContext';

const NewScreen = (): JSX.Element => {
  const { movies } = useContext(MovieContext);

  const newMoviesList = movies.filter((item) => item.feature === 'New');

  return (
    <View style={{ flex: 1 }}>
      <ListMovies data={newMoviesList} />
    </View>
  );
};

export default NewScreen;
