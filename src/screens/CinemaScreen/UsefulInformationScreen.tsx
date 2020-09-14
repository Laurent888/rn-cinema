import React, { useContext, useEffect, useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';
import { useTheme } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';

import TheatreItem from '@components/TheatreItem';
import { MovieContext } from '@context/moviesContext';
import { ATheme } from '@lib/theme/theme';
import { getDistanceTheathreToUser } from '@lib/utils/utils';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const useStyle = (theme: ATheme) =>
  StyleSheet.create({
    mapContainer: {
      width: '100%',
      height: 260,
      backgroundColor: 'lightblue',
    },
    sectionTitle: {
      paddingVertical: 10,
      fontSize: 24,
    },
    section: {
      paddingVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: '#fff',
      marginBottom: 10,
    },
    priceRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 10,
    },
    priceLable: {
      fontWeight: '700',
      color: '#222',
    },
    price: {
      color: theme.colors.primary,
      fontSize: 18,
    },
  });

interface UsefulInfoProps {
  route: RouteProp<any, any>;
}

interface infosState {
  city: string;
  coordinates: number[];
  name: string;
  postalCode: string;
  street: string;
}

const UsefulInformationScreen = ({ route }: UsefulInfoProps): JSX.Element => {
  const s = useStyle(useTheme());

  const [infos, setInfos] = useState<infosState | null>(null);

  const {
    params: { theatre },
  } = route;

  const { theatres, location: userLocation } = useContext(MovieContext);

  useEffect(() => {
    const getInfo = async () => {
      const foundTheatre = theatres.find((item) => item.name === theatre);

      if (foundTheatre) setInfos(foundTheatre);
    };
    getInfo();
  }, []);

  const getInitialCoordinates = () => {
    return {
      latitude: infos.coordinates[0],
      longitude: infos.coordinates[1],
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    };
  };

  return (
    <ScrollView>
      {/* Map */}
      <View style={s.mapContainer}>
        {infos && (
          <MapView region={getInitialCoordinates()} style={StyleSheet.absoluteFillObject}>
            <Marker coordinate={getInitialCoordinates()} />
          </MapView>
        )}
      </View>

      {/* Theatre Address */}
      <View style={[s.section]}>
        {infos !== null && (
          <TheatreItem
            city={infos.city}
            name={infos.name}
            street={infos.street}
            postalCode={infos.postalCode}
            distance={
              userLocation &&
              getDistanceTheathreToUser(userLocation, {
                lat: infos.coordinates[0],
                lng: infos.coordinates[1],
              }).distanceKM
            }
            noDecoration
          />
        )}
      </View>

      {/* Prices */}
      <View style={s.section}>
        <Text style={s.sectionTitle}>Price</Text>
        <View style={[s.priceRow]}>
          <Text style={[s.priceLable]}>Regular</Text>
          <Text style={s.price}>11,5€</Text>
        </View>
        <View style={[s.priceRow]}>
          <Text style={[s.priceLable]}>Kids (Under 12 years) </Text>
          <Text style={s.price}>10€</Text>
        </View>
        <View style={[s.priceRow]}>
          <Text style={[s.priceLable]}>Pensioner </Text>
          <Text style={s.price}>9.3€</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default UsefulInformationScreen;
