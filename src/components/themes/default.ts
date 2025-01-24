import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  colors: {
    neutral: {
      lightest: '#F0F0F2',
      extraLight: '#E0E2E6',
      light: '#C0C2C8',
      medium: '#9EA0A5',
      dark: '#7F8185',
      extraDark: '#5E5F63',
      darkest: '#202122',
    },
    primary: {
      light: '#0B0E3A',
      medium: '#060725',
      dark: '#020318',
    },
    secondary: {
      light: '#EF4C84',
      medium: '#D31450',
      dark: '#8C1038',
    },
    accent1: {
      light: '#00BFC1',
      medium: '#009598',
      dark: '#006C6E',
    },
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    fontSizes: {
      h1: '3.5rem',
      h2: '2.25rem',
      h3: '1.25rem',
      bodyLarge: '1rem',
      bodySmall: '0.875rem',
      caption: '0.75rem',
    },
    lineHeights: {
      h1: '130%',
      h2: '130%',
      h3: '130%',
      bodyLarge: '150%',
      bodySmall: '150%',
      caption: '130%',
    },
    fontWeights: {
      bold: 700,
      semiBold: 600,
      regular: 400,
    },
  },
};
