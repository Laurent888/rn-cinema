import React, { useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { ATheme } from '@lib/theme/theme';
import { useTheme } from 'react-native-paper';

import { mockData } from '../../../data/mockData';
import MovieDetailHeader from '@components/MovieDetailHeader';
import MoviePlot from '@components/MoviePlot';
import MovieDetailScreenings from '@components/MovieDetailScreenings';

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
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'flex-start' }}>
        <MovieDetailHeader
          title={Title}
          image={Poster}
          actors={Actors}
          director={Director}
          plot={Plot}
          genre={Genre}
          releasedDate={Released}
        />

        <MoviePlot text={Plot} />

        <MovieDetailScreenings />
      </View>
    </ScrollView>
  );
};

export default MovieDetailScreen;
