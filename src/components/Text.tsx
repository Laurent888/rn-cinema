import React from 'react';
import { Text as RawText, StyleSheet, TextProps } from 'react-native';

interface TextCustomProps extends TextProps {
  text: string;
}

const s = StyleSheet.create({
  default: {
    fontFamily: 'Roboto-regular',
  },
});

const Text = ({ text, ...props }: TextCustomProps): React.ReactElement => {
  return (
    <RawText style={[s.default]} {...props}>
      {text}
    </RawText>
  );
};

export default Text;
