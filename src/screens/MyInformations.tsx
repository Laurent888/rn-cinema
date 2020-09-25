import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';

import { ATheme } from '@lib/theme/theme';
import Text from '@components/Text';
import { Button } from 'react-native-paper';

const useStyle = (theme: ATheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
    },
    section: {
      paddingHorizontal: 15,
      paddingVertical: 20,
      marginBottom: 15,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 20,
      color: theme.colors.primary,
      paddingBottom: 20,
      textTransform: 'uppercase',
    },
    marginTop: {
      marginTop: 20,
    },
  });

const MyInformations: React.FC = () => {
  const s = useStyle(useTheme());

  return (
    <ScrollView>
      <View style={s.container}>
        <View style={s.section}>
          <Text text="Credentials" style={s.title} />

          <View>
            <Button mode="outlined">Modify Email</Button>
            <Button mode="outlined" style={s.marginTop}>
              Modify Password
            </Button>
          </View>
        </View>

        <View style={s.section}>
          <Text text="Identity & Address" style={s.title} />

          <Button mode="outlined">Modify my personal data</Button>
        </View>

        <View style={s.section}>
          <Text text="Kids" style={s.title} />
          <Text
            text="Receive deals for your kids by providing their name and birthdate"
            style={{ paddingBottom: 15 }}
          />
          <Button mode="outlined">Add a kid</Button>
        </View>

        <View style={s.section}>
          <Text text="Delete my account?" />
          <Button mode="outlined" style={s.marginTop}>
            Delete my account
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default MyInformations;
