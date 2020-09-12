import React, { useState, Fragment } from 'react';
import { View } from 'react-native';

import CityItem from '@components/CityItem';
import { MovieProps } from '@lib/types/types';
import TheatreItem from '../TheatreItem';
import { mockTheaters } from '../../../data/mockData';

interface ListTheatreScreeningsProps {
  movieData: MovieProps;
}

/***** MAIN COMPONENT ******/
const ListTheatreScreenings: React.FC<ListTheatreScreeningsProps> = ({
  movieData,
}: ListTheatreScreeningsProps) => {
  const [selectedCity, setSelectedCity] = useState('');

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
          <CityItem city={city} onPress={selectCity} />
          <View style={{ display: selectedCity === city ? 'flex' : 'none' }}>
            {movieDataWithCity
              .filter((item) => item.details?.city === city)
              .map((t) => (
                <TheatreItem
                  key={t.theatre}
                  name={t.theatre}
                  times={t.times}
                  city={t.details?.city}
                  street={t.details?.street}
                  postalCode={t.details?.postalCode}
                />
              ))}
          </View>
        </Fragment>
      ))}
    </View>
  );
};

export default ListTheatreScreenings;
