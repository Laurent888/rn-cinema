import { DefaultTheme, configureFonts } from 'react-native-paper';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {}

    interface ThemeFonts {
      bold: {
        fontFamily: string;
        fontWeight: string;
      };
    }

    interface Theme {}
  }
}

const fontConfig = {
  default: {
    bold: {
      fontFamily: 'Roboto-bold',
      fontWeight: 'normal',
    },
    regular: {
      fontFamily: 'Roboto-regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Roboto-regular',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Roboto-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Roboto-light',
      fontWeight: 'normal',
    },
  },
};

const getTheme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: '#3c27aa',
  },
  fonts: configureFonts(fontConfig),
});

const theme = getTheme(DefaultTheme);

export { getTheme, theme };
