import React from 'react';
import { View } from 'react-native';
import dayjs from 'dayjs';

import ScrollDates from './ScrollDates';
import ListTheatres from './ListTheatres';
import { MovieProps } from '@lib/types/types';

interface MovieDetailScreeningsProps {
  movieData: MovieProps;
}

const getNextDates = (numberOfDay = 1) => {
  const currentDate = new Date();

  const arr = [];
  for (let i = 0; i < numberOfDay; i++) {
    const date = dayjs(currentDate).add(i, 'day').format('DD MMM YYYY');
    arr.push(date);
  }

  return arr;
};

/********* MAIN COMPONENT  ********/
const MovieDetailScreenings = ({ movieData }: MovieDetailScreeningsProps): JSX.Element => {
  const datesList = getNextDates(8);

  return (
    <View>
      <ScrollDates dates={datesList} />

      <ListTheatres movieData={movieData} />
    </View>
  );
};

export default MovieDetailScreenings;
