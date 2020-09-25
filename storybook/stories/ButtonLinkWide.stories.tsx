import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import ButtonWideLink from '@components/ButtonWideLink';

storiesOf('Button Wide Link', module)
  .addDecorator((story) => <View style={{ paddingVertical: 30 }}>{story()}</View>)
  .add('Default', () => <ButtonWideLink label="My Club" onPress={() => console.log('Test')} />);
