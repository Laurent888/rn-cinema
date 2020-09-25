import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { MaterialCommunityIcons as MdIcon } from '@expo/vector-icons';

import ButtonWideLink from '@components/ButtonWideLink';
import { ATheme } from '@lib/theme/theme';
import Text from '@components/Text';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationProp } from '@react-navigation/native';
import { SCREENS } from '@navigation/routeTypes';

interface MyAccountScreenProps {
  navigation: NavigationProp<any, any>;
}

const useStyle = (theme: ATheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    headerUser: {
      paddingVertical: 20,
      paddingHorizontal: 20,
      backgroundColor: theme.colors.secondary,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    userText: {
      fontSize: 18,
      color: '#fff',
      textTransform: 'uppercase',
    },
  });

const links = [
  {
    to: '',
    name: 'theClub',
    label: 'The Club',
  },
  {
    to: '',
    name: 'myMovies',
    label: 'My movies',
  },
  {
    to: '',
    name: 'myNewsletter',
    label: 'My Newsletter',
  },
];

const MyAccountScreen: React.FC<MyAccountScreenProps> = ({ navigation }) => {
  const s = useStyle(useTheme());

  const navigateTo = (name: string) => {
    navigation.navigate(name);
  };

  return (
    <View style={s.container}>
      <View style={s.headerUser}>
        <Text text="user@user.com" style={s.userText} />
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ paddingHorizontal: 10 }}
          onPress={() => navigateTo(SCREENS.MY_INFORMATIONS)}
        >
          <MdIcon name="circle-edit-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View>
        {links.map((link) => (
          <ButtonWideLink key={link.name} label={link.label} onPress={() => console.log(link.to)} />
        ))}
      </View>
    </View>
  );
};

export default MyAccountScreen;
