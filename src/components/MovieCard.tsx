import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';

import Text from '@components/Text';
import { ATheme } from '@lib/theme/theme';
import FeatureBadge from './FeatureBadge';
import { getFormattedTime } from '@lib/utils/utils';

interface MovieCardProps {
  id: string;
  image: string;
  title: string;
  genre: string;
  director: string;
  releasedDate: string;
  actors: string;
  runtime: string;
  onPress: (id: string) => void;
  times?: string[] | null;
}

const useStyle = (theme: ATheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    containerTop: {
      height: 250,
      paddingVertical: 20,
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems: 'flex-start',
      borderBottomColor: theme.colors.mediumGrey,
      borderBottomWidth: 0.5,
      marginHorizontal: 15,
    },
    imageContainer: {
      width: '40%',
      height: '100%',
      paddingRight: 15,
    },
    contentContainer: {
      width: '60%',
    },
    title: {
      fontSize: 23,
      fontWeight: '500',
    },
    actors: {
      paddingTop: 7,
      color: theme.colors.mediumGrey,
    },

    // Times content
    timesContainer: {
      paddingVertical: 15,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      backgroundColor: '#fff',
      borderBottomColor: theme.colors.mediumGrey,
      borderBottomWidth: 0.5,
      flexWrap: 'wrap',
    },
  });

const MovieCard = ({
  image,
  title,
  genre,
  director,
  releasedDate,
  actors,
  runtime,
  id,
  times,
  onPress,
}: MovieCardProps): JSX.Element => {
  const s = useStyle(useTheme());

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        onPress(title);
      }}
    >
      <View style={[s.container, times && { marginBottom: 7 }]}>
        <View style={s.containerTop}>
          <View style={s.imageContainer}>
            <Image
              source={{ uri: image }}
              resizeMode="cover"
              style={{ width: '100%', height: '100%' }}
            />
          </View>
          <View style={s.contentContainer}>
            <Text text={`${title} (${runtime})`} style={s.title} />
            <Text text={genre} />
            <Text text={`Director: ${director}`} style={{ paddingTop: 7, marginBottom: -3 }} />
            <Text text={`Release: ${releasedDate}`} />
            <Text text={`With: ${actors}`} style={s.actors} />
          </View>
        </View>

        {times && (
          <View style={s.timesContainer}>
            {times.map((time) => (
              <FeatureBadge
                key={time}
                text={getFormattedTime(time)}
                size="m"
                marginRight={3}
                marginBottom={3}
              />
            ))}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
