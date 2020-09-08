import React from 'react';
import { storiesOf } from '@storybook/react-native';
import TextAccordeon from '@components/TextAccordeon';

const mockText =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam quam rerum numquam ipsa iure placeat, animi repellat aperiam modi soluta quaerat, fuga dolore, veniam mollitia eius at consequatur itaque.';

storiesOf('Text accordeon', module).add('Default', () => <TextAccordeon text={mockText} />);
