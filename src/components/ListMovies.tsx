import React from 'react';
import { View, FlatList } from 'react-native';
import ImageCard from './ImageCard';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SCREENS } from '@navigation/routeTypes';

const ListMovies = ({ data }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const navigateToDetail = (id: string) => {
    navigation.navigate(SCREENS.MOVIE_DETAIL, { title: id });
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.Title}
        renderItem={({ item }) => (
          <ImageCard
            title={item.Title}
            image={item.Poster}
            feature={route.name === 'New' ? '' : item.feature}
            onPress={navigateToDetail}
          />
        )}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </View>
  );
};

export default ListMovies;
