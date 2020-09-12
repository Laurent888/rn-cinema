import React, { memo } from 'react';
import { View } from 'react-native';

import Text from '@components/Text';
import FeatureBadge from '@components/FeatureBadge';

import useStyle from './styles';
import { useTheme } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getFormattedTime } from '@lib/utils/utils';

interface TheatreItemProps {
  name: string;
  times?: string[];
  onPress: (name: string) => void;
  street: string | undefined;
  postalCode: string | undefined;
  city: string | undefined;
  distance?: string | number | undefined | null;
}

const TheatreItem = memo(
  ({
    name,
    times,
    street = '',
    postalCode = '',
    city = '',
    distance,
    onPress,
  }: TheatreItemProps) => {
    const s = useStyle(useTheme());

    return (
      <View style={s.theatreItemContainer}>
        <TouchableOpacity onPress={() => onPress(name)}>
          <View style={[s.topContent, times && s.borderBottomWidth]}>
            <Text style={s.title} text={name} />

            <View style={s.address}>
              <Text style={s.textAddress} text={street} />
              <Text style={s.textAddress} text={`${postalCode} ${city}`} />
            </View>

            <View>
              <Text style={s.distance} text={distance ? `${distance} km` : '-'} />
            </View>
          </View>
        </TouchableOpacity>

        {times && (
          <View style={s.bottomContent}>
            {times.map((time) => (
              <FeatureBadge key={time} text={getFormattedTime(time)} size="m" marginRight={3} />
            ))}
          </View>
        )}
      </View>
    );
  },
);

export default TheatreItem;
