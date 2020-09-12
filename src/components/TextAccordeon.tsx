import React, { useState } from 'react';
import { StyleSheet, View, TextProps, TouchableOpacity, Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import { ATheme } from '@lib/theme/theme';

interface CustomTextProps extends TextProps {
  text: string;
}

const useStyle = (theme: ATheme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      paddingHorizontal: 15,
    },
    text: {
      lineHeight: 22,
      ...theme.fonts.light,
      fontSize: 16,
    },
    read: {
      color: theme.colors.primary,
      ...theme.fonts.medium,
      textAlign: 'right',
      paddingTop: 5,
    },
  });

const TextAccordeon = ({ text, ...props }: CustomTextProps): JSX.Element => {
  const s = useStyle(useTheme());

  const [isOpen, setIsOpen] = useState(false);

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => setIsOpen(!isOpen)}>
      <View style={[s.container]}>
        {isOpen ? (
          <Text style={[s.text]} {...props}>
            {text}
          </Text>
        ) : (
          <Text style={[s.text]} numberOfLines={3} ellipsizeMode="tail" {...props}>
            {text}
          </Text>
        )}
        <Text style={s.read}>{`Read ${isOpen ? 'less' : 'more'}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TextAccordeon;
