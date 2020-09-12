import React, { useState, Fragment, useContext } from 'react';
import { View } from 'react-native';

import { MovieProps } from '@lib/types/types';
import { MovieContext } from '@context/moviesContext';
import { getDistanceTheathreToUser } from '@lib/utils/utils';

import CityItem from '@components/CityItem';
import TheatreItem from '../TheatreItem';

interface ListTheatreScreeningsProps {
  movieData: MovieProps;
}

/***** MAIN COMPONENT ******/
const ListTheatreScreenings: React.FC<ListTheatreScreeningsProps> = ({
  movieData,
}: ListTheatreScreeningsProps) => {
  const [selectedCity, setSelectedCity] = useState('');
  const { location: userLocation, theatres } = useContext(MovieContext);

  const movieDataWithCity = movieData.screenings.map((item) => {
    const theatreObject = theatres.find((theater) => theater.name === item.theatre);

    return {
      ...item,
      details: theatreObject || null,
    };
  });

  const citiesUnique = [
    ...Array.from(
      new Set(movieDataWithCity.map((item) => (item.details ? item.details.city : null))),
    ),
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
                  distance={
                    userLocation &&
                    t.details &&
                    getDistanceTheathreToUser(userLocation, {
                      lat: t.details.coordinates[0],
                      lng: t.details.coordinates[1],
                    }).distanceKM
                  }
                />
              ))}
          </View>
        </Fragment>
      ))}
    </View>
  );
};

export default ListTheatreScreenings;
