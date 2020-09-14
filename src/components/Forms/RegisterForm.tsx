import { theme } from '@lib/theme/theme';
import { Formik } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useTheme, Button, Checkbox } from 'react-native-paper';

import TextInput from '@components/TextInput';
import { Section, useStyle } from './LoginForm';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(6, 'Minimum 6 characters').required(),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const RegisterForm = (): JSX.Element => {
  const s = useStyle(useTheme());
  const [checked, setChecked] = useState(false);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleChange, handleSubmit, values, isSubmitting, handleBlur }) => {
        return (
          <ScrollView style={s.scrollView}>
            <Text style={s.title}>register</Text>

            <Section s={s}>
              <TextInput
                name="email"
                label="Email*"
                onChangeText={handleChange('email')}
                value={values.email}
                onBlur={handleBlur('email')}
              />
              <TextInput
                name="password"
                label="Password*"
                onChangeText={handleChange('password')}
                value={values.password}
                secureTextEntry
                placeholder="6 characters minimum"
                onBlur={handleBlur('password')}
              />
              <TextInput
                name="confirmPassword"
                label="Confirm password*"
                onChangeText={handleChange('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry
                onBlur={handleBlur('confirmPassword')}
              />

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  width: '90%',
                  paddingVertical: 15,
                }}
              >
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text style={[s.consent, { fontSize: 12, marginLeft: 5, paddingTop: 3 }]}>
                  Check here to indicate that you have read and agree to the terms of the FilmCine
                  Customer Agreement
                </Text>
              </View>

              <Button
                mode="contained"
                color={theme.colors.secondary}
                labelStyle={s.buttonLabel}
                onPress={handleSubmit}
                disabled={isSubmitting}
              >
                Register
              </Button>

              <View style={{ paddingTop: 10 }}>
                <Text>* Required field</Text>
              </View>
            </Section>

            <Section s={s}>
              <Text style={[s.consent, { paddingBottom: 10 }]}>
                In these Website Standard Terms and Conditions, "Your Content" shall mean any audio,
                video text, images or other material you choose to display on this Website. By
                displaying Your Content, you grant FilmCine a non-exclusive, worldwide irrevocable,
                sub licensable license to use, reproduce, adapt, publish, translate and distribute
                it in any and all media. Your Content must be your own and must not be invading any
                third-party’s rights. FilmCine reserves the right to remove any of Your Content from
                this Website at any time without notice.
              </Text>
              <Text style={s.consent}>
                In no event shall FilmCine, nor any of its officers, directors and employees, shall
                be held liable for anything arising out of or in any way connected with your use of
                this Website whether such liability is under contract. FilmCine, including its
                officers, directors and employees shall not be held liable for any indirect,
                consequential or special liability arising out of or in any way related to your use
                of this Website. In no event shall FilmCine, nor any of its officers, directors and
                employees, shall be held liable for anything arising out of or in any way connected
                with your use of this Website whether such liability is under contract. FilmCine,
                including its officers, directors and employees shall not be held liable for any
                indirect, consequential or special liability arising out of or in any way related to
                your use of this Website.
              </Text>
            </Section>
          </ScrollView>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
