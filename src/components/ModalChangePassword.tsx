import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextInput from './TextInput';
import { Button, useTheme } from 'react-native-paper';
import { ATheme } from '@lib/theme/theme';
import { CustomModalProps } from '@lib/types/types';

const initialValues = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
};

const validationSchema = Yup.object({
  oldPassword: Yup.string().required(),
  newPassword: Yup.string().min(6, 'Minimun 6 characters').required(),
  confirmPassword: Yup.string().required(),
});

const useStyle = (theme: ATheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: theme.dimensions.width,
      alignSelf: 'center',
      backgroundColor: '#fff',
      paddingHorizontal: 15,
    },
    buttonSection: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    button: {
      flexGrow: 1,
      marginHorizontal: 5,
      marginTop: 5,
    },
    btnLabelStyle: {
      fontSize: 18,
    },
  });

const ModalChangePassword: React.FC<CustomModalProps> = ({ isVisible = false, onClose }) => {
  const s = useStyle(useTheme());

  return (
    <Modal isVisible={isVisible} backdropColor="#fff">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, values, handleSubmit }) => {
          return (
            <ScrollView
              style={s.container}
              contentContainerStyle={{ justifyContent: 'space-between', height: '100%' }}
            >
              <View>
                <TextInput
                  label="Current password"
                  value={values.oldPassword}
                  onChangeText={handleChange('oldPassword')}
                  onBlur={handleBlur('oldPassword')}
                />
                <TextInput
                  label="New password"
                  value={values.newPassword}
                  onChangeText={handleChange('newPassword')}
                  onBlur={handleBlur('newPassword')}
                />
                <TextInput
                  label="Confirm password"
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                />
              </View>

              <View style={s.buttonSection}>
                <Button
                  mode="outlined"
                  style={s.button}
                  labelStyle={[s.btnLabelStyle]}
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button
                  mode="contained"
                  onPress={handleSubmit}
                  style={s.button}
                  labelStyle={[s.btnLabelStyle]}
                >
                  Validate
                </Button>
              </View>
            </ScrollView>
          );
        }}
      </Formik>
    </Modal>
  );
};

export default ModalChangePassword;
