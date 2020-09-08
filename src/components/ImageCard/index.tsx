import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from 'react-native-paper';

import Text from '../Text';
import { ATheme } from '@lib/theme/theme';

interface ImageCardProps {
  image: string;
  title: string;
  onPress: (title: string) => void;
}

const useStyles = (theme: ATheme) => {
  const CARD_WIDTH = theme.dimensions.width / 2 - 1;
  const CARD_HEIGHT = CARD_WIDTH * 1.35;

  return StyleSheet.create({
    container: {
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      position: 'relative',
      marginBottom: 2,
    },
    image: {
      width: '100%',
      height: '100%',
      backgroundColor: 'lightblue',
      resizeMode: 'cover',
      ...StyleSheet.absoluteFillObject,
    },
    content: {
      display: 'flex',
      alignItems: 'flex-start',
      height: '100%',
      paddingVertical: 15,
      paddingLeft: 10,
      justifyContent: 'flex-end',
    },
    text: {
      fontSize: 20,
      color: '#fff',
    },
  });
};

const ImageCard = ({ image, title, feature, onPress }: ImageCardProps) => {
  const s = useStyles(useTheme());

  const handlePress = () => {
    onPress(title);
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handlePress}>
      <View style={[s.container]}>
        <Image source={{ uri: image }} style={[s.image]} />
        <LinearGradient
          style={s.content}
          start={[0, 0.5]}
          end={[0, 1]}
          colors={['transparent', 'rgba(0,0,0,.5)', 'rgba(0,0,0,1)']}
        >
          <Text text={title} style={[s.text]} />
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

export default ImageCard;
