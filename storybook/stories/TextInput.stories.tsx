import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import TextInput from '@components/TextInput';

const Divider = () => <View style={{ height: 20, backgroundColor: '#fff' }} />;

const TextInputGroup = () => (
  <View>
    <TextInput onChangeText={(text) => console.log(text)} value="" />
    <Divider />
    <TextInput onChangeText={(text) => console.log(text)} value="" placeholder="Email" />
    <Divider />
    <TextInput onChangeText={(text) => console.log(text)} value="guraber@gmail.com" label="Email" />
  </View>
);

storiesOf('Text Input', module)
  .addDecorator((story) => <View style={{ padding: 30, backgroundColor: '#fff' }}>{story()}</View>)
  .add('default', () => <TextInputGroup />);
