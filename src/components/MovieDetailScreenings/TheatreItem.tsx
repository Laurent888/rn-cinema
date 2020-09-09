import React, { memo } from 'react';
import { View } from 'react-native';

import Text from '@components/Text';
import FeatureBadge from '@components/FeatureBadge';

interface TheatreItemProps {
  name: string;
  times: string[];
  style: any;
}

const TheatreItem = memo(({ name, times, style: s }: TheatreItemProps) => {
  return (
    <View style={s.theatreItemContainer}>
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

      <View style={s.bottomContent}>
        {times.map((time) => (
          <FeatureBadge key={time} text={time} size="m" marginRight={10} />
        ))}
      </View>
    </View>
  );
});

export default TheatreItem;
