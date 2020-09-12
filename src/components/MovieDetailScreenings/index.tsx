import React from 'react';
import { View } from 'react-native';

import ScrollDates from './ScrollDates';
import ListTheatresScreenings from './ListTheatresScreenings';
import { MovieProps } from '@lib/types/types';
import { getNextDates } from '@lib/utils/utils';

interface MovieDetailScreeningsProps {
  movieData: MovieProps;
}

/********* MAIN COMPONENT  ********/
const MovieDetailScreenings = ({ movieData }: MovieDetailScreeningsProps): JSX.Element => {
  const datesList = getNextDates(8);

  return (
    <View>
      <ScrollDates dates={datesList} />

      <ListTheatresScreenings movieData={movieData} />
    </View>
  );
};

export default MovieDetailScreenings;
