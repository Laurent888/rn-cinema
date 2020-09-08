import React from 'react';
import { View } from 'react-native';
import TextAccordeon from './TextAccordeon';
import Text from './Text';

interface MoviePlotProps {
  text: string;
}

const MoviePlot = ({ text }: MoviePlotProps): JSX.Element => {
  return (
    <View style={{ paddingRight: 20, paddingVertical: 20 }}>
      <TextAccordeon text={text} />
    </View>
  );
};

export default MoviePlot;
