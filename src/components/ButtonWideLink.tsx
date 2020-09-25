import { ATheme } from '@lib/theme/theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { MaterialCommunityIcons as MdIcon } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Text from '@components/Text';

const useStyle = (theme: ATheme) =>
  StyleSheet.create({
    buttonContainer: {
      width: theme.dimensions.width,
      paddingVertical: 20,
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      borderBottomColor: theme.colors.lightGrey,
      borderBottomWidth: 0.5,
    },
    label: {
      textTransform: 'uppercase',
      fontSize: 20,
    },
  });

interface ButtonWideLinkProps {
  onPress: () => void;
  label: string;
}

const ButtonWideLink: React.FC<ButtonWideLinkProps> = ({ label, onPress }) => {
  const s = useStyle(useTheme());

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={s.buttonContainer}>
        <Text style={s.label} text={label} />

        <MdIcon name="chevron-right" size={30} />
      </View>
    </TouchableOpacity>
  );
};

export default ButtonWideLink;
