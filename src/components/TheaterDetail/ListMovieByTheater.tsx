import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MovieCard from '@components/MovieCard';
import { MovieProps } from '@lib/types/types';

interface ListProps {
  movies: any[];
  theatre?: string;
}

const ListMovieByTheater = ({ movies, theatre }: ListProps): JSX.Element => {
  return (
    <ScrollView>
      {movies.map((item: MovieProps) => {
        const times = item.screenings.find((bItem) => bItem.theatre === theatre)?.times;

        return (
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
            onPress={() => console.log(item.imdbID)}
            times={times || []}
          />
        );
      })}
    </ScrollView>
  );
};

export default ListMovieByTheater;

const styles = StyleSheet.create({});
