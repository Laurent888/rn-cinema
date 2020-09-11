import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'react-native-paper';
import debounce from 'debounce';

import SearchBar from '@components/SearchBar';
import { ATheme } from '@lib/theme/theme';
import { searchDatabaseByString } from '@lib/utils/searchDatabase';
import { MovieProps } from '@lib/types/types';
import MovieCard from '@components/MovieCard';
import { SCREENS } from '@navigation/routeTypes';

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

const SearchScreen = ({ navigation }): JSX.Element => {
  const s = useStyle(useTheme());

  const [searchValue, setSearchValue] = useState('');
  const [foundMovies, setFoundMovies] = useState<MovieProps[]>([]);

  const fetchSearchResult = useCallback(
    debounce((text: string) => {
      const { results, length } = searchDatabaseByString(text);
      setFoundMovies(results);
    }, 400),
    [],
  );

  const handleChangeText = (text: string) => {
    setSearchValue(text);

    if (text.length > 3) {
      fetchSearchResult(text);
    }
    if (text.length === 0) {
      setFoundMovies([]);
    }
  };

  const navigateToMovieDetail = (id: string) => {
    navigation.navigate(SCREENS.MOVIE, { screen: SCREENS.MOVIE_DETAIL, params: { title: id } });
  };

  return (
    <SafeAreaView style={s.SafeAreaView}>
      <View style={s.containerScreen}>
        <SearchBar
          value={searchValue}
          onChangeText={handleChangeText}
          onClose={() => navigation.goBack()}
        />
        <View>
          {foundMovies.map((item) => (
            <MovieCard
              key={item.imdbID}
              id={item.imdbID}
              title={item.Title}
              director={item.Director}
              actors={item.Actors}
              genre={item.Genre}
              image={item.Poster}
              releasedDate={item.Released}
              runtime={item.Runtime}
              onPress={navigateToMovieDetail}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
