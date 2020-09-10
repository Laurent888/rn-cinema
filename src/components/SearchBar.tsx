import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Searchbar as PaperSearchBar, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons as McIcon } from '@expo/vector-icons';
import { ATheme } from '@lib/theme/theme';

interface SearchBarProps {
  onChangeText: (text: string) => void;
  value: string;
  onClose: () => void;
}

const useStyle = (theme: ATheme) =>
  StyleSheet.create({
    container: {
      width: theme.dimensions.width,
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 6,
      borderBottomWidth: 0.5,
      borderBottomColor: theme.colors.lightGrey,
    },
    inputContainer: {
      width: '85%',
      elevation: 0,
    },
    input: {
      fontSize: 20,
    },
    closeSearch: {
      width: '15%',
      alignItems: 'center',
      paddingHorizontal: 15,
      paddingVertical: 2,
    },
  });

const SearchBar = ({ onChangeText, value, onClose }: SearchBarProps): JSX.Element => {
  const theme = useTheme();
  const s = useStyle(theme);

  return (
    <View style={s.container}>
      <PaperSearchBar
        placeholder="Search for a movie or theater"
        onChangeText={onChangeText}
        value={value}
        searchAccessibilityLabel="Search for a movie or theater"
        iconColor={theme.colors.primary}
        style={s.inputContainer}
        inputStyle={s.input}
      />
      <TouchableOpacity style={s.closeSearch} onPress={onClose}>
        <McIcon name="chevron-down" size={38} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
