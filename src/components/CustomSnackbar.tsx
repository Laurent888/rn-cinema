import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Snackbar } from 'react-native-paper';

interface CustomSnackbarProps {
  message: string;
  visible: boolean;
  onDismissSnackBar: () => void;
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({ message, visible, onDismissSnackBar }) => {
  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismissSnackBar}
      duration={4000}
      action={{
        label: 'Undo',
        onPress: () => {
          onDismissSnackBar();
        },
      }}
    >
      {message}
    </Snackbar>
  );
};

export default CustomSnackbar;
