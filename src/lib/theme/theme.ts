/* eslint-disable */

import { Dimensions } from 'react-native';
import { DefaultTheme, configureFonts } from 'react-native-paper';

const { width: WIDTH } = Dimensions.get('screen');

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      lightGrey: string;
      mediumGrey: string;
      secondary: string;
    }

    interface ThemeFonts {
      bold: {
        fontFamily: string;
        fontWeight: string;
      };
    }

    interface Theme {
      dimensions: {
        width: number;
      };
    }
  }
}

export interface ATheme extends ReactNativePaper.Theme {}

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
    primary: '#d6182c',
    secondary: '#657899',
    lightGrey: '#c5c5c5',
    mediumGrey: '#999',
  },
  dimensions: {
    width: WIDTH,
  },
  fonts: configureFonts(fontConfig),
});

const theme: ATheme = getTheme(DefaultTheme);

export { getTheme, theme };
