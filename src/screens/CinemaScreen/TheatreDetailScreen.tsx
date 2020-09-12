import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

import ScrollDates from '@components/MovieDetailScreenings/ScrollDates';
import { getNextDates } from '@lib/utils/utils';
import ListMovieByTheater from '@components/TheaterDetail/ListMovieByTheater';

import { mockData } from '../../../data/mockData';
import { MovieProps } from '@lib/types/types';

const TheatreDetailScreen = ({ route, navigation }): JSX.Element => {
  const {
    params: { theatre },
  } = route;

  navigation.setOptions({
    headerTitle: theatre,
  });

  const [moviesByDate, setMoviesByDate] = useState<MovieProps[]>([]);

  const filterMoviesByTheatre = (nameTheatre: string) => {
    return mockData.filter((item) => {
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
