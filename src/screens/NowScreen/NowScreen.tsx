import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Button } from 'react-native-paper';

import Text from '@components/Text';
import { MovieContext } from '@context/moviesContext';
import MovieCard from '@components/MovieCard';
import { MovieProps } from '@lib/types/types';
import { getFormattedTime } from '@lib/utils/utils';

const CURRENT_HOUR = new Date().getHours() + 2;
const CURRENT_MINUTES = new Date().getMinutes();
const FORMATTED_CURRENT = `${CURRENT_HOUR}${CURRENT_MINUTES}`;
const MAX_TIME = `${CURRENT_HOUR + 1}${CURRENT_MINUTES}`;

const BookTimeRow = ({ time, theatre }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 15,
      }}
    >
      <View>
        <Text text={getFormattedTime(time)} />
        <Text text={theatre} style={{ color: '#888' }} />
      </View>
      <Button mode="contained">Book</Button>
    </View>
  );
};

const NowScreen = (): JSX.Element => {
  const [nowMovies, setNowMovies] = useState<MovieProps[] | null>(null);
  const [loading, setLoading] = useState(true);
  const { movies } = useContext(MovieContext);

  useEffect(() => {
    setNowMovies(getNowMovies);
  }, []);

  useEffect(() => {
    if (loading && nowMovies) {
      setLoading(false);
    }
  }, [nowMovies]);

  const getNowMovies = movies
    .map((movie) => {
      const filteredCinema = movie.screenings.map((time) => {
        return {
          ...time,
          times: time.times.filter(
            (item) =>
              parseInt(FORMATTED_CURRENT, 10) < parseInt(item, 10) &&
              parseInt(item, 10) < parseInt(MAX_TIME, 10),
          ),
        };
      });

      return {
        ...movie,
        screenings: [...filteredCinema.filter((bItem) => bItem.times.length !== 0)],
      };
    })
    .filter((cItem) => cItem.screenings.length !== 0);

  return (
    <ScrollView>
      {loading ? (
        <View>
          <ActivityIndicator />
        </View>
      ) : (
        nowMovies?.map((movie) => (
          <View key={movie.imdbID}>
            <MovieCard
              image={movie.Poster}
              title={movie.Title}
              genre={movie.Genre}
              director={movie.Director}
              releasedDate={movie.Released}
              actors={movie.Actors}
              runtime={movie.Runtime}
              onPress={() => console.log('Hello')}
            />

            <BookTimeRow
              time={movie.screenings[0].times[0]}
              theatre={movie.screenings[0].theatre}
            />
          </View>
        ))
      )}
    </ScrollView>
  );
};

export default NowScreen;

const styles = StyleSheet.create({});
