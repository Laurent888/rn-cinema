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

    // List theatres
    theatreItemContainer: {
      width: '100%',
      paddingTop: 20,
      backgroundColor: '#fff',
      borderBottomColor: theme.colors.lightGrey,
      borderBottomWidth: 1,
    },
    address: {
      paddingTop: 7,
    },
    title: {
      fontSize: 18,
    },
    textAddress: {
      fontSize: 16,
      color: theme.colors.text,
    },
    distance: {
      fontSize: 25,
      color: theme.colors.primary,
      textAlign: 'right',
    },
    topContent: {
      paddingBottom: 5,
      marginHorizontal: 20,
      borderBottomColor: theme.colors.lightGrey,
      borderBottomWidth: 1,
    },
    bottomContent: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingVertical: 20,
    },
  });
};
