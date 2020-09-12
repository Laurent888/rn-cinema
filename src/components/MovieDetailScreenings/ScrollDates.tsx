import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Text from '@components/Text';
import { ATheme } from '@lib/theme/theme';
import { useTheme } from 'react-native-paper';

interface ScrollDatesProps {
  dates: any[];
}

const useStyle = (theme: ATheme) => {
  return StyleSheet.create({
    dateBox: {
      backgroundColor: theme.colors.background,
      marginRight: 2,
      marginVertical: 1,
      width: 80,
      height: 70,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    text: {
      textAlign: 'center',
      flexWrap: 'wrap',
    },
  });
};

interface DateBoxProps {
  text: string;
  style: any;
}

const DateBox = ({ text, style }: DateBoxProps) => (
  <View style={style.dateBox}>
    <Text text={text} style={style.text} />
  </View>
);

const ScrollDates = ({ dates }: ScrollDatesProps): JSX.Element => {
  const s = useStyle(useTheme());

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {dates.map((date) => (
        <DateBox key={date} text={date} style={s} />
      ))}
    </ScrollView>
  );
};

export default ScrollDates;
