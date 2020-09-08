import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import dayjs from 'dayjs';

import ScrollDates from './ScrollDates';

const getNextDates = (numberOfDay = 1) => {
  const currentDate = new Date();

  const arr = [];
  for (let i = 0; i < numberOfDay; i++) {
    const date = dayjs(currentDate).add(i, 'day').format('DD MMM YYYY');
    arr.push(date);
  }

  return arr;
};

const MovieDetailScreenings = () => {
  const datesList = getNextDates(8);

  return (
    <View>
      <ScrollDates dates={datesList} />
    </View>
  );
};

export default MovieDetailScreenings;

const styles = StyleSheet.create({});
