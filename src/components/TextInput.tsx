import React from 'react';
import { TextInput as NativeTextInput, ViewStyle, View, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

import { ATheme } from '@lib/theme/theme';
import Text from '@components/Text';

interface CustonInputProps {
  value: string;
  onChangeText: (value: string) => void;
  label?: string;
  placeholder?: string;
  style?: ViewStyle | ViewStyle[];
  name?: string;
  secureTextEntry?: boolean;
  onBlur: (e: any) => void;
}

const useStyle = (theme: ATheme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '100%',
      marginBottom: 10,
    },
    label: {
      color: '#444',
      paddingVertical: 5,
    },
    input: {
      width: '100%',
      paddingVertical: 5,
      paddingHorizontal: 10,
      backgroundColor: '#f4f4f4',
      color: theme.colors.text,
      borderWidth: 0.7,
      borderColor: '#aaa',
    },
  });

const TextInput = ({
  label,
  onChangeText,
  placeholder,
  value,
  style,
  secureTextEntry = false,
  onBlur,
}: CustonInputProps): JSX.Element => {
  const s = useStyle(useTheme());

  return (
    <View style={s.container}>
      {label && <Text text={label} style={s.label} />}

      <NativeTextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        onBlur={onBlur}
        style={[s.input, style]}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default TextInput;
