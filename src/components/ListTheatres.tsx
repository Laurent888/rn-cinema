import React, { useState, Fragment, useContext } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import TheatreItem from './TheatreItem';
import { TheaterProps } from '@lib/types/types';
import CityItem from './CityItem';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '@navigation/routeTypes';
import { getDistanceTheathreToUser } from '@lib/utils/utils';
import { MovieContext } from '@context/moviesContext';

interface ListTheatresProps {
  data: TheaterProps[];
}

const ListTheatres = ({ data }: ListTheatresProps): JSX.Element => {
  const n = useNavigation();
  const { location: userLocation } = useContext(MovieContext);

  const [selectedCity, setSelectedCity] = useState('');

  const uniqueCities: string[] = [...Array.from(new Set(data.map((item) => item.city)))];

  const getTheatresByCity = (city: string): TheaterProps[] => {
    return data.filter((item) => item.city === city);
  };

  const selectCity = (city: string) => {
    if (city === selectedCity) {
      setSelectedCity('');
    } else {
      setSelectedCity(city);
    }
  };

  const navigateToTheatre = (theatre: string) => {
    n.navigate(SCREENS.THEATRE_DETAIL, { theatre });
  };

  return (
    <ScrollView contentContainerStyle={{ width: '100%', backgroundColor: '#fff' }}>
      {uniqueCities.map((city) => (
        <Fragment key={city}>
          <CityItem city={city} onPress={selectCity} />
          <View style={{ display: selectedCity === city ? 'flex' : 'none' }}>
            {getTheatresByCity(city).map((item) => (
              <TheatreItem
                key={item.name}
                name={item.name}
                city={item.city}
                street={item.street}
                postalCode={item.postalCode}
                onPress={navigateToTheatre}
                distance={
                  userLocation &&
                  getDistanceTheathreToUser(userLocation, {
                    lat: item.coordinates[0],
                    lng: item.coordinates[1],
                  }).distanceKM
                }
              />
            ))}
          </View>
        </Fragment>
      ))}
    </ScrollView>
  );
};

export default ListTheatres;

const styles = StyleSheet.create({});
