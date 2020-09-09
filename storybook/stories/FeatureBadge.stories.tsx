import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import FeatureBadge from '@components/FeatureBadge';

const BadgesWidthSpacing = () => (
  <View style={{ marginBottom: 10 }}>
    <FeatureBadge text="New" size="s" />
    <View style={{ height: 20 }} />
    <FeatureBadge text="18:30" size="m" />
  </View>
);

storiesOf('Feature badge', module)
  .addDecorator((story) => <View style={{ padding: 30 }}>{story()}</View>)
  .add('Sizes', () => <BadgesWidthSpacing />);
