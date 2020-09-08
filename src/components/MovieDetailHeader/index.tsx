import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { ATheme } from '@lib/theme/theme';
import { useTheme } from 'react-native-paper';
import Text from '@components/Text';

interface MovieDetailHeaderProps {
  image: string;
  title: string;
  actors: string;
  plot: string;
  director: string;
  genre: string;
  releasedDate: string;
}

const useStyle = (theme: ATheme) => {
  const WIDTH_POSTER = theme.dimensions.width / 3;
  const HEIGHT_POSTER = WIDTH_POSTER * 1.35;

  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      width: '100%',
      height: 300,
      paddingHorizontal: 10,
    },
    imageContainer: {
      width: WIDTH_POSTER,
      height: HEIGHT_POSTER,
    },
    image: {
      width: '100%',
      height: '100%',
    },
    detailsContainer: {
      width: theme.dimensions.width - WIDTH_POSTER - 20,
      paddingHorizontal: 15,
      paddingTop: 15,
    },
    genre: {
      paddingBottom: 10,
    },
    cast: {
      color: theme.colors.mediumGrey,
    },
  });
};

const MovieDetailHeader = ({
  image,
  title,
  director,
  genre,
  actors,
  plot,
  releasedDate,
}: MovieDetailHeaderProps): JSX.Element => {
  const s = useStyle(useTheme());

  return (
    <View style={[s.header]}>
      <View style={[s.imageContainer]}>
        <Image source={{ uri: image }} style={[s.image]} resizeMode="cover" />
      </View>
      <View style={[s.detailsContainer]}>
        <Text text={`Released: ${releasedDate}`} />
        <Text style={[s.genre]} text={genre} />
        <Text text={`Director: ${director}`} />
        <Text style={[s.cast]} text={`Stars: ${actors}`} />
      </View>
    </View>
  );
};

export default MovieDetailHeader;
