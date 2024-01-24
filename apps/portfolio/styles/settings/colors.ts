import { ComponentColor } from '@/components/component-props';
import Color from 'color';

export type ColorTheme = 'light' | 'dark';

export function getMetaColorTheme(theme: ColorTheme): string {
  return theme === 'light' ? staticPalette.primary : blueDark[900];
}

export interface ColorRange {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  main: string;
}

export type ThemeColor = Record<ColorTheme, string>;

export const white = '#fff';

export const blue: ColorRange = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#99CCF3',
  300: '#66B2FF',
  400: '#3399FF',
  main: '#007FFF',
  500: '#007FFF',
  600: '#0072E5', // vs blueDark 900: WCAG 4.6 AAA (large), APCA 36 Not for reading text
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

export const blueDark: ColorRange = {
  50: '#EAEDF1',
  100: '#DAE0E7',
  200: '#ACBAC8',
  300: '#7B91A7',
  main: '#7B91A7',
  400: '#4B5E71',
  500: '#3B4A59',
  600: '#2F3A46',
  700: '#1F262E', // contrast 13.64:1
  800: '#141A1F',
  900: '#101418',
};

export const grey: ColorRange = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD', // vs blueDark 900: WCAG 11.6 AAA, APCA 78 Best for text
  400: '#B0B8C4', // vs blueDark 900: WCAG 9 AAA, APCA 63.3 Ok for text
  main: '#B0B8C4',
  500: '#9DA8B7', // vs blueDark 900: WCAG 7.5 AAA, APCA 54.3 Only for large text
  600: '#6B7A90', // vs white bg: WCAG 4.1 AA, APCA 68.7 Ok for text
  700: '#434D5B', // vs white bg: WCAG 8.3 AAA, APCA 88.7 Best for text
  800: '#303740', // vs white bg: WCAG 11.9 AAA, APCA 97.3 Best for text
  900: '#1C2025',
};

export const error: ColorRange = {
  50: '#FFF0F1',
  100: '#FFDBDE',
  200: '#FFBDC2',
  300: '#FF99A2',
  400: '#FF7A86',
  500: '#FF505F',
  main: '#EB0014', // contrast 4.63:1
  600: '#EB0014',
  700: '#C70011',
  800: '#94000D',
  900: '#570007',
};

export const success: ColorRange = {
  50: '#E9FBF0',
  100: '#C6F6D9',
  200: '#9AEFBC',
  300: '#6AE79C',
  400: '#3EE07F',
  500: '#21CC66',
  main: '#21CC66',
  600: '#1DB45A',
  700: '#1AA251',
  800: '#178D46',
  900: '#0F5C2E',
};

export const warning: ColorRange = {
  50: '#FFF9EB',
  100: '#FFF3C1',
  200: '#FFECA1',
  300: '#FFDC48', // vs blueDark900: WCAG 10.4 AAA, APCA 72 Ok for text
  400: '#F4C000', // vs blueDark900: WCAG 6.4 AA normal, APCA 48 Only large text
  500: '#DEA500', // vs blueDark900: WCAG 8 AAA normal, APCA 58 Only large text
  main: '#DEA500',
  600: '#D18E00', // vs blueDark900: WCAG 6.4 AA normal, APCA 48 Only large text
  700: '#AB6800', // vs white bg: WCAG 4.4 AA large, APCA 71 Ok for text
  800: '#8C5800', // vs white bg: WCAG 5.9 AAA large, APCA 80 Best for text
  900: '#5A3600', // vs white bg: WCAG 10.7 AAA, APCA 95 Best for text
};

export const focus = '#ffe600';

export const palette: Record<string, ThemeColor> = {
  background: {
    dark: blueDark[900],
    light: white,
  },
  text: {
    dark: grey[400],
    light: blueDark[900],
  },
  border: {
    dark: Color(blueDark[700]).alpha(0.8).toString(),
    light: grey[100],
  },
};

export const staticPalette: Record<ComponentColor, string> = {
  primary: '#db1f2f',
  neutral: '#636B74',
};
