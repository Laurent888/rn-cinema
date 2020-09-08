import React from 'react';
import { View } from 'react-native';
import dayjs from 'dayjs';
import { mockTheaters } from '../../../data/mockData';

import ScrollDates from './ScrollDates';
import ListTheatres from './ListTheatres';

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
const MovieDetailScreenings = () => {
  const datesList = getNextDates(8);

  return (
    <View>
      <ScrollDates dates={datesList} />

      <ListTheatres data={mockTheaters} />
    </View>
  );
};

export default MovieDetailScreenings;
