import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';

import Text from '@components/Text';
import { ATheme } from '@lib/theme/theme';

interface BadgeProps {
  text: string;
}

const useStyle = (theme: ATheme) =>
  StyleSheet.create({
    container: {
      alignSelf: 'flex-start',
      paddingVertical: 8,
      paddingHorizontal: 10,
      backgroundColor: theme.colors.primary,
    },
    text: {
      color: '#fff',
    },
  });

const FeatureBadge = ({ text }: BadgeProps) => {
  const s = useStyle(useTheme());

  return (
    <View style={s.container}>
      <Text style={s.text} text={text} />
    </View>
  );
};

export default FeatureBadge;
