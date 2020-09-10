import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import SearchBar from '@components/SearchBar';

storiesOf('Search bar', module)
  // .addDecorator((story) => <View style={{ padding: 30 }}>{story()}</View>)
  .add('default', () => <SearchBar onChangeText={(text) => console.log(test)} value="" />);
