import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ATheme } from '@lib/theme/theme';
import { useTheme } from 'react-native-paper';

import { mockData } from '../../../data/mockData';
import MovieDetailHeader from '@components/MovieDetailHeader';

const useStyle = (theme: ATheme) => StyleSheet.create({});

const MovieDetailScreen = ({ route, navigation }) => {
  const s = useStyle(useTheme());

  const { params } = route;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: params.title,
    });
  }, []);

  const movieData = mockData.filter((item) => item.Title === params.title)[0];

  if (!movieData)
    return (
      <View>
        <Text>Error</Text>
      </View>
    );

  const { Title, Released, Genre, Director, Actors, Plot, Poster } = movieData;

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <MovieDetailHeader
        title={Title}
        image={Poster}
        actors={Actors}
        director={Director}
        plot={Plot}
        genre={Genre}
        releasedDate={Released}
      />
    </View>
  );
};

export default MovieDetailScreen;

const styles = StyleSheet.create({});
