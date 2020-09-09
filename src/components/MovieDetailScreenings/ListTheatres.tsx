import React, { useState, useRef, Fragment } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';

import Text from '@components/Text';

import { TheaterProps } from '@lib/types/types';
import { getUniqueCities } from '@lib/utils/dataTransformation';
import { useStyle } from './styles';
import TheatreItem from './TheatreItem';

interface ListTheatresProps {
  data: TheaterProps[];
}

/******* COMPONENTS ********/

const CityItem = React.memo(({ city, style, onPress }) => (
  <TouchableOpacity activeOpacity={0.8} style={style.cityRow} onPress={() => onPress(city)}>
    <Text text={city} style={{ textTransform: 'uppercase' }} />
    <Entypo name="chevron-thin-down" size={25} />
  </TouchableOpacity>
));

const ListByCities = ({ data, style, selectedCity, onPress }): JSX.Element => {
  const uniqueCities = getUniqueCities(data);

  return (
    <View>
      {uniqueCities.map((city) => {
        const theatres = data.filter((item) => item.city === city);

        return (
          <Fragment key={city}>
            <CityItem city={city} style={style} onPress={onPress} />
            {selectedCity === city &&
              theatres.map((bTtem) => <TheatreItem key={bTtem.name} name={bTtem.name} />)}
          </Fragment>
        );
      })}
    </View>
  );
};

/***** MAIN COMPONENT ******/
const ListTheatres: React.FC<ListTheatresProps> = ({ data }: ListTheatresProps) => {
  const [selectedCity, setSelectedCity] = useState('');
  const s = useStyle(useTheme());

  const selectCity = (city: string) => {
    if (city === selectedCity) {
      setSelectedCity('');
    } else {
      setSelectedCity(city);
    }
  };

  return (
    <View>
      <ListByCities data={data} style={s} selectedCity={selectedCity} onPress={selectCity} />
    </View>
  );
};

export default ListTheatres;
