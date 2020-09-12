import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons as McIcon } from '@expo/vector-icons';
import { ATheme } from '@lib/theme/theme';
import { useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '@navigation/routeTypes';

const useStyle = (theme: ATheme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    iconContainer: {
      paddingRight: 5,
    },
    icon: {
      color: theme.colors.primary,
    },
  });

const HeaderRight = (): JSX.Element => {
  const s = useStyle(useTheme());
  const n = useNavigation();

  const navigateTo = (target: string) => {
    n.navigate(target);
  };

  return (
    <View style={s.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[s.iconContainer, { paddingRight: 8 }]}
        onPress={() => navigateTo(SCREENS.SEARCH)}
      >
        <McIcon name="magnify" size={32} style={s.icon} />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        style={[s.iconContainer, { paddingLeft: 8 }]}
        onPress={() => console.log('Test')}
      >
        <McIcon name="account-circle-outline" size={32} style={s.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderRight;
