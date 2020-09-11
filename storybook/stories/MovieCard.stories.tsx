import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import MovieCard from '../../src/components/MovieCard';

storiesOf('Movie card', module)
  .addDecorator((story) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>{story()}</View>
  ))
  .add('Default', () => (
    <MovieCard
      title="Tenet"
      director="Christopher Nolan"
      actors="Elizabeth Debicki, John David Washington"
      genre="Drama, SF"
      image="https://img-4.linternaute.com/Yp5NN7idKWBmvdQZ-VxV_lThidU=/405x540/c7f21806901c430b8179fe05776ae559/ccmcms-linternaute/189781.jpeg"
      releasedDate="2020"
    />
  ));
