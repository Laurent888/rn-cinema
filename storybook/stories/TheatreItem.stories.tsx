import React from 'react';
import { storiesOf } from '@storybook/react-native';

import TheatreItem from '@components/TheatreItem';
import { View } from 'react-native';

storiesOf('Theatre Item', module)
  .addDecorator((story) => <View style={{ paddingVertical: 20 }}>{story()}</View>)
  .add('Default', () => <TheatreItem name="Rigoletto" />);
