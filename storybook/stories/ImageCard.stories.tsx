import React from 'react';
import { storiesOf } from '@storybook/react-native';

import ImageCard from '../../src/components/ImageCard';
import { View } from 'react-native';

storiesOf('Image card', module)
  .addDecorator((story) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{story()}</View>
  ))
  .add('Default', () => (
    <ImageCard
      title="Tenet"
      image="https://img-4.linternaute.com/Yp5NN7idKWBmvdQZ-VxV_lThidU=/405x540/c7f21806901c430b8179fe05776ae559/ccmcms-linternaute/189781.jpeg"
    />
  ));
