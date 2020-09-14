import React, { useState, useEffect, useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { MaterialCommunityIcons as MdIcon } from '@expo/vector-icons';

import ScrollDates from '@components/MovieDetailScreenings/ScrollDates';
import { getNextDates } from '@lib/utils/utils';
import ListMovieByTheater from '@components/TheaterDetail/ListMovieByTheater';

import { MovieProps } from '@lib/types/types';
import { MovieContext } from '@context/moviesContext';
import { SCREENS } from '@navigation/routeTypes';

interface TheatreDetailScreenProps {
  route: RouteProp<any, any>;
  navigation: NavigationProp<any, any>;
}

const TheatreDetailHeaderRight = ({ onPress }) => (
  <View style={{ paddingRight: 20 }}>
    <TouchableOpacity onPress={onPress}>
      <MdIcon name="information-outline" size={30} />
    </TouchableOpacity>
  </View>
);

const TheatreDetailScreen = ({ route, navigation }: TheatreDetailScreenProps): JSX.Element => {
  const {
    params: { theatre },
  } = route;

  const { movies } = useContext(MovieContext);

  navigation.setOptions({
    headerTitle: theatre,
    headerRight: () => (
      <TheatreDetailHeaderRight
        onPress={() => navigation.navigate(SCREENS.USEFUL_INFO, { theatre })}
      />
    ),
  });

  const [moviesByDate, setMoviesByDate] = useState<MovieProps[]>([]);

  const filterMoviesByTheatre = (nameTheatre: string) => {
    return movies.filter((item) => {
      const match = item.screenings.find((bItem) => bItem.theatre === nameTheatre);
      if (match) return item;
    });
  };

  useEffect(() => {
    // Set the movies available in the selected theatre
    const results = filterMoviesByTheatre(theatre);
    setMoviesByDate(results);
  }, []);

  const datesList = getNextDates(8);

  return (
    <View style={{ paddingBottom: 60, backgroundColor: '#fff' }}>
      <View>
        <ScrollDates dates={datesList} />
      </View>

      <ListMovieByTheater theatre={theatre} movies={moviesByDate} />
    </View>
  );
};

export default TheatreDetailScreen;
