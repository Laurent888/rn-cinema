import React, { useContext, useEffect } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Text from '@components/Text';
import { ATheme } from '@lib/theme/theme';
import { useTheme } from 'react-native-paper';
import { DatesContext } from '@context/datesContext';

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
    dateBoxSelected: {
      borderBottomColor: theme.colors.primary,
      borderBottomWidth: 2,
    },
    text: {
      textAlign: 'center',
      flexWrap: 'wrap',
    },
    dateSelected: {
      color: theme.colors.primary,
    },
  });
};

interface DateBoxProps {
  text: string;
  style: any;
  onPress: (date: string) => void;
  selected?: boolean;
}

const DateBox = ({ text, style, onPress, selected }: DateBoxProps) => (
  <TouchableOpacity onPress={() => onPress(text)}>
    <View style={[style.dateBox, selected && style.dateBoxSelected]}>
      <Text text={text} style={[style.text, selected && style.dateSelected]} />
    </View>
  </TouchableOpacity>
);

const ScrollDates = ({ dates }: ScrollDatesProps): JSX.Element => {
  const s = useStyle(useTheme());
  const { dateMovie, handleSetDate } = useContext(DatesContext);

  useEffect(() => {
    handleSetDate(dates[0]);
  }, []);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {dates.map((date) => (
        <DateBox
          key={date}
          text={date}
          style={s}
          onPress={handleSetDate}
          selected={dateMovie === date}
        />
      ))}
    </ScrollView>
  );
};

export default ScrollDates;
