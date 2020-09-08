import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import FeatureBadge from '@components/FeatureBadge';

storiesOf('Feature badge', module)
  .addDecorator((story) => <View style={{ padding: 30 }}>{story()}</View>)
  .add('New', () => <FeatureBadge text="New" />);
