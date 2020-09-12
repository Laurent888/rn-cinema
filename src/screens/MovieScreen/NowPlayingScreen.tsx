import React, { useContext } from 'react';
import { View } from 'react-native';

import ListMovies from '@components/ListMovies';
import { MovieContext } from 'context/moviesContext';

const NowPlayingScreen = (): JSX.Element => {
  const { movies } = useContext(MovieContext);

  return (
    <View style={{ flex: 1 }}>
      <ListMovies data={movies} />
    </View>
  );
};

export default NowPlayingScreen;
