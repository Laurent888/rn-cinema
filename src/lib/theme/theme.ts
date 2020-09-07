import { DefaultTheme } from 'react-native-paper';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {}

    interface Theme {}
  }
}

const useTheme = (theme) => ({
  ...theme,
});

const theme = useTheme(DefaultTheme);

export { useTheme, theme };
