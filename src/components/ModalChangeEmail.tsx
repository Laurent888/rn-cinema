import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Modal from 'react-native-modal';
import { useTheme, Button } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextInput from './TextInput';
import { ATheme } from '@lib/theme/theme';
import { CustomModalProps } from '@lib/types/types';

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

const initialValues = {
  newEmail: '',
  confirmEmail: '',
};

const validationSchema = Yup.object({
  newEmail: Yup.string().email(),
  confirmEmail: Yup.string(),
});

const ModalChangeEmail: React.FC<CustomModalProps> = ({ isVisible = false, onClose }) => {
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
                  label="New Email"
                  value={values.newEmail}
                  onChangeText={handleChange('newEmail')}
                  onBlur={handleBlur('newEmail')}
                />
                <TextInput
                  label="Confirm new email"
                  value={values.confirmEmail}
                  onChangeText={handleChange('confirmEmail')}
                  onBlur={handleBlur('confirmEmail')}
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

export default ModalChangeEmail;
