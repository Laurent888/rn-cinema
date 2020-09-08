/* eslint-disable */

import { Dimensions } from 'react-native';
import { DefaultTheme, configureFonts } from 'react-native-paper';

const { width: WIDTH } = Dimensions.get('screen');

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      mediumGrey: string;
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
    primary: '#3c27aa',
    mediumGrey: '#999',
  },
  dimensions: {
    width: WIDTH,
  },
  fonts: configureFonts(fontConfig),
});

const theme = getTheme(DefaultTheme);

export { getTheme, theme };
