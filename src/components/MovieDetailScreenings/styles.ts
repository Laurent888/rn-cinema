import { StyleSheet } from 'react-native';
import { ATheme } from '@lib/theme/theme';

export const useStyle = (theme: ATheme) => {
  return StyleSheet.create({
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
};
