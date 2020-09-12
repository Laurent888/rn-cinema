import React, { useState, useEffect, useContext } from 'react';
import { View } from 'react-native';

import ScrollDates from '@components/MovieDetailScreenings/ScrollDates';
import { getNextDates } from '@lib/utils/utils';
import ListMovieByTheater from '@components/TheaterDetail/ListMovieByTheater';

import { MovieProps } from '@lib/types/types';
import { MovieContext } from '@context/moviesContext';

const TheatreDetailScreen = ({ route, navigation }): JSX.Element => {
  const {
    params: { theatre },
  } = route;

  const { movies } = useContext(MovieContext);

  navigation.setOptions({
    headerTitle: theatre,
  });

  const [moviesByDate, setMoviesByDate] = useState<MovieProps[]>([]);

  const filterMoviesByTheatre = (nameTheatre: string) => {
    return movies.filter((item) => {
      const match = item.screenings.find((bItem) => bItem.theatre === nameTheatre);
      if (match) return item;
    });
  };

  useEffect(() => {
    // Set the movies available in the selected theatre
    const results = filterMoviesByTheatre(theatre);
    setMoviesByDate(results);
  }, []);

  const datesList = getNextDates(8);

  return (
    <View style={{ paddingBottom: 60, backgroundColor: '#fff' }}>
      <View>
        <ScrollDates dates={datesList} />
      </View>

      <ListMovieByTheater theatre={theatre} movies={moviesByDate} />
    </View>
  );
};

export default TheatreDetailScreen;
