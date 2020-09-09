import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';

import Text from '@components/Text';
import { ATheme } from '@lib/theme/theme';

interface TheatreItemProps {
  name: string;
}

const useStyle = (theme: ATheme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      paddingVertical: 20,
      paddingHorizontal: 15,
    },
    address: {
      paddingTop: 7,
    },
    textAddress: {
      fontSize: 14,
      color: theme.colors.text,
    },
    distance: {
      fontSize: 20,
      color: theme.colors.primary,
      textAlign: 'right',
    },
  });

const TheatreItem = memo(({ name }: TheatreItemProps) => {
  const s = useStyle(useTheme());

  return (
    <View style={s.container}>
      <Text text={name} />

      <View style={s.address}>
        <Text style={s.textAddress} text="Kungstorget 2" />
        <Text style={s.textAddress} text="402 22 Goteborg" />
      </View>

      <View>
        <Text style={s.distance} text="40km" />
      </View>
    </View>
  );
});

export default TheatreItem;
