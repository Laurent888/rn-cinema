import React, { memo } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';

import Text from '@components/Text';
import { ATheme } from '@lib/theme/theme';

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
}

const useStyle = (theme: ATheme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: 250,
      paddingVertical: 20,
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems: 'flex-start',
      borderBottomColor: theme.colors.mediumGrey,
      borderBottomWidth: 0.5,
    },
    imageContainer: {
      width: '40%',
      height: '100%',
      paddingHorizontal: 15,
    },
    contentContainer: {
      width: '60%',
      paddingRight: 5,
    },
    title: {
      fontSize: 27,
      fontWeight: '500',
    },
    actors: {
      paddingTop: 7,
      color: theme.colors.mediumGrey,
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
      <View style={s.container}>
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
    </TouchableOpacity>
  );
};

export default MovieCard;
