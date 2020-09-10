import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '@components/SearchBar';
import { ATheme } from '@lib/theme/theme';
import { useTheme } from 'react-native-paper';

const useStyle = (theme: ATheme) =>
  StyleSheet.create({
    SafeAreaView: {
      backgroundColor: '#fff',
    },
    containerScreen: {
      height: '100%',
      backgroundColor: '#fff',
    },
  });

const SearchScreen = ({ navigation }) => {
  const s = useStyle(useTheme());

  const [searchValue, setSearchValue] = useState('');

  const handleChangeText = (text: string) => {
    setSearchValue(text);
  };

  return (
    <SafeAreaView style={s.SafeAreaView}>
      <View style={s.containerScreen}>
        <SearchBar
          value={searchValue}
          onChangeText={handleChangeText}
          onClose={() => navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
