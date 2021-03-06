import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';

import Text from '@components/Text';
import { ATheme } from '@lib/theme/theme';

type sizes = 's' | 'm';

interface BadgeProps {
  text: string;
  size?: sizes;
  color?: string | null;
  marginLeft?: string | number | null;
  marginRight?: string | number | null;
  marginBottom?: string | number | null;
}

const useStyle = (theme: ATheme) =>
  StyleSheet.create({
    container: {
      alignSelf: 'flex-start',
      paddingVertical: 5,
      paddingHorizontal: 10,
      backgroundColor: theme.colors.primary,
    },
    containerM: {
      paddingVertical: 8,
      paddingHorizontal: 15,
    },
    text: {
      color: '#fff',
    },
    sizeM: {
      fontSize: 18,
    },
  });

const FeatureBadge = ({
  text,
  size = 's',
  color = null,
  marginLeft = null,
  marginRight = null,
  marginBottom = null,
}: BadgeProps): JSX.Element => {
  const s = useStyle(useTheme());

  return (
    <View
      style={[
        s.container,
        size === 'm' && s.containerM,
        color && { backgroundColor: color },
        marginLeft && { marginLeft },
        marginRight && { marginRight },
        marginBottom && { marginBottom },
      ]}
    >
      <Text style={[s.text, size === 'm' && s.sizeM]} text={text} />
    </View>
  );
};

export default FeatureBadge;
