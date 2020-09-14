import { ATheme, theme } from '@lib/theme/theme';
import { Formik } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTheme, Button } from 'react-native-paper';

import TextInput from '@components/TextInput';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '@navigation/routeTypes';

interface SectionProps {
  children: React.ReactNode;
  s: any;
}

export const useStyle = (theme: ATheme) =>
  StyleSheet.create({
    title: {
      paddingVertical: 20,
      textAlign: 'center',
      fontSize: 30,
      fontWeight: '500',
      color: '#444',
      textTransform: 'uppercase',
    },
    scrollView: {
      backgroundColor: theme.colors.background,
    },
    section: {
      backgroundColor: '#fff',
      paddingVertical: 20,
      paddingHorizontal: 15,
      marginBottom: 10,
    },
    signupDesc: {
      paddingVertical: 20,
      color: theme.colors.mediumGrey,
    },
    signUpTitle: {
      fontSize: 30,
      color: theme.colors.secondary,
      fontWeight: '600',
    },
    buttonLabel: {
      fontSize: 16,
      fontWeight: '500',
      textTransform: 'uppercase',
    },
    forgotten: {
      textAlign: 'right',
      textDecorationLine: 'underline',
      marginBottom: 10,
    },
    consent: {
      color: '#888',
      textAlign: 'justify',
      fontStyle: 'italic',
      lineHeight: 20,
    },
  });

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export const Section = ({ children, s }: SectionProps): JSX.Element => (
  <View style={s.section}>{children}</View>
);

const LoginForm = (): JSX.Element => {
  const s = useStyle(useTheme());

  const n = useNavigation();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleChange, handleSubmit, values, isSubmitting }) => {
        return (
          <ScrollView style={s.scrollView}>
            <Text style={s.title}>Login</Text>

            <Section s={s}>
              <TextInput
                name="email"
                label="Email*"
                onChangeText={handleChange('email')}
                value={values.email}
              />
              <TextInput
                name="password"
                label="Password*"
                onChangeText={handleChange('password')}
                value={values.password}
                secureTextEntry
              />

              <View style={{ paddingVertical: 10 }}>
                <Text style={s.forgotten}>Forgotten password ?</Text>
              </View>

              <Button
                mode="contained"
                color={theme.colors.secondary}
                labelStyle={s.buttonLabel}
                onPress={handleSubmit}
                disabled={isSubmitting}
              >
                Login
              </Button>

              <View style={{ paddingTop: 10 }}>
                <Text>* Required field</Text>
              </View>
            </Section>

            <Section s={s}>
              <Text style={s.signUpTitle}>Sign up</Text>

              <Text style={s.signupDesc}>
                See up to 3 movies every week in Dolby Cinema, IMAX, RealD 3D & more. Plus, get star
                status and the same perks as AMC Stubs Premiere starting at $19.95/month +tax !
              </Text>

              <Button
                mode="contained"
                color={theme.colors.secondary}
                labelStyle={s.buttonLabel}
                onPress={() => n.navigate('register')}
              >
                continue
              </Button>
            </Section>
          </ScrollView>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
