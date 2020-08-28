import { DarkTheme } from 'react-native-paper';

import Colors from '../utils/colors';

const navigationTheme = {
  ...DarkTheme,
  // override colors
  colors: {
    ...DarkTheme.colors,
    primary: Colors.primary,
  }
};

export default navigationTheme;
