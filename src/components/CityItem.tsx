import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import Text from '@components/Text';
import { ATheme } from '@lib/theme/theme';
import { useTheme } from 'react-native-paper';

interface CityItemProps {
  city: string;
  onPress: (city: string) => void;
}

const useStyle = (theme: ATheme) =>
  StyleSheet.create({
    cityRow: {
      width: '100%',
      paddingVertical: 20,
      paddingHorizontal: 20,
      borderBottomColor: theme.colors.lightGrey,
      borderBottomWidth: 0.5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });

const CityItem = React.memo(({ city, onPress }: CityItemProps) => {
  const style = useStyle(useTheme());

  return (
    <TouchableOpacity activeOpacity={0.8} style={style.cityRow} onPress={() => onPress(city)}>
      <Text text={city} style={{ textTransform: 'uppercase' }} />
      <Entypo name="chevron-thin-down" size={25} />
    </TouchableOpacity>
  );
});

export default CityItem;
