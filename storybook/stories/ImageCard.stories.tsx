import React from 'react';
import { storiesOf } from '@storybook/react-native';

import ImageCard from '../../src/components/ImageCard';

storiesOf('Image card', module).add('Default', () => (
  <ImageCard
    title="Tenet"
    image="https://img-4.linternaute.com/Yp5NN7idKWBmvdQZ-VxV_lThidU=/405x540/c7f21806901c430b8179fe05776ae559/ccmcms-linternaute/189781.jpeg"
  />
));
