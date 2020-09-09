import React, { useState, Fragment } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';

import Text from '@components/Text';

import { MovieProps } from '@lib/types/types';
import { useStyle } from './styles';
import TheatreItem from './TheatreItem';
import { mockTheaters } from '../../../data/mockData';

interface ListTheatresProps {
  movieData: MovieProps;
}

interface CityItemProps {
  city: string;
  style: any;
  onPress: (city: string) => void;
}

/******* COMPONENTS ********/

const CityItem = React.memo(({ city, style, onPress }: CityItemProps) => (
  <TouchableOpacity activeOpacity={0.8} style={style.cityRow} onPress={() => onPress(city)}>
    <Text text={city} style={{ textTransform: 'uppercase' }} />
    <Entypo name="chevron-thin-down" size={25} />
  </TouchableOpacity>
));

/***** MAIN COMPONENT ******/
const ListTheatres: React.FC<ListTheatresProps> = ({ movieData }: ListTheatresProps) => {
  const [selectedCity, setSelectedCity] = useState('');
  const s = useStyle(useTheme());

  const movieDataWithCity = movieData.screenings.map((item) => {
    const theatreObject = mockTheaters.find((theater) => theater.name === item.theatre);

    return {
      ...item,
      details: theatreObject,
    };
  });

  const citiesUnique = [
    ...Array.from(new Set(movieDataWithCity.map((item) => item.details.city))),
  ].sort((a, b) => a - b);

  const selectCity = (city: string) => {
    if (city === selectedCity) {
      setSelectedCity('');
    } else {
      setSelectedCity(city);
    }
  };

  return (
    <View>
      {citiesUnique.map((city) => (
        <Fragment key={city}>
          <CityItem city={city} onPress={selectCity} style={s} />
          <View style={{ display: selectedCity === city ? 'flex' : 'none' }}>
            {movieDataWithCity
              .filter((item) => item.details?.city === city)
              .map((t) => (
                <TheatreItem key={t.theatre} name={t.theatre} times={t.times} style={s} />
              ))}
          </View>
        </Fragment>
      ))}
    </View>
  );
};

export default ListTheatres;
