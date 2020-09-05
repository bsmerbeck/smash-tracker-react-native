import { DarkTheme } from 'react-native-paper';

import colors from '../utils/colors';

const navigationTheme = {
  ...DarkTheme,
  dark: true,
  // override colors
  colors: {
    ...DarkTheme.colors,
    primary: '#ff0000',
    secondary: colors.mediumGrey,
  }
};

export default navigationTheme;
