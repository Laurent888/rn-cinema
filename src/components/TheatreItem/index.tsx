import React, { memo } from 'react';
import { View } from 'react-native';

import Text from '@components/Text';
import FeatureBadge from '@components/FeatureBadge';

import useStyle from './styles';
import { useTheme } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface TheatreItemProps {
  name: string;
  times?: string[];
  onPress?: () => void;
}

const CustomView = ({ onPress, children }) => {
  if (onPress) {
    return <TouchableOpacity>{children}</TouchableOpacity>;
  } else {
    return <View>{children}</View>;
  }
};

const TheatreItem = memo(({ name, times, onPress }: TheatreItemProps) => {
  const s = useStyle(useTheme());

  return (
    <View style={s.theatreItemContainer}>
      <CustomView onPress={onPress}>
        <View style={s.topContent}>
          <Text style={s.title} text={name} />

          <View style={s.address}>
            <Text style={s.textAddress} text="Kungstorget 2" />
            <Text style={s.textAddress} text="402 22 Goteborg" />
          </View>

          <View>
            <Text style={s.distance} text="40 km" />
          </View>
        </View>
      </CustomView>

      {times && (
        <View style={s.bottomContent}>
          {times.map((time) => (
            <FeatureBadge key={time} text={time} size="m" marginRight={10} />
          ))}
        </View>
      )}
    </View>
  );
});

export default TheatreItem;
