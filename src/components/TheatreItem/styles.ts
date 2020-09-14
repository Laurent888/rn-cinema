import { StyleSheet } from 'react-native';
import { ATheme } from '@lib/theme/theme';

const useStyle = (theme: ATheme) =>
  StyleSheet.create({
    theatreItemContainer: {
      width: '100%',
      paddingTop: 20,
      backgroundColor: '#fff',
      borderBottomColor: theme.colors.lightGrey,
      borderBottomWidth: 1,
    },
    noButton: {
      borderBottomWidth: 0,
      marginHorizontal: 0,
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
    },
    bottomContent: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingVertical: 20,
      flexWrap: 'wrap',
    },
    borderBottomWidth: {
      borderBottomWidth: 1,
    },
  });

export default useStyle;
