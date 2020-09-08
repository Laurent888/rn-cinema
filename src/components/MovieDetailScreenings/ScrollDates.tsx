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
      paddingHorizontal: 10,
      paddingVertical: 15,
      backgroundColor: theme.colors.background,
      marginRight: 2,
      marginVertical: 1,
      width: 90,
      alignItems: 'center',
    },
    text: { textAlign: 'center' },
  });
};

const DateBox = ({ text, style }) => (
  <View style={style.dateBox}>
    <Text text={text} style={style.text} />
  </View>
);

const ScrollDates = ({ dates }: ScrollDatesProps) => {
  const s = useStyle(useTheme());

  return (
    <ScrollView horizontal bounces={false}>
      {dates.map((date) => (
        <DateBox key={date} text={date} style={s} />
      ))}
    </ScrollView>
  );
};

export default ScrollDates;

const styles = StyleSheet.create({});