import {StyleSheet} from 'react-native';
import useFonts from '../theme/Fonts';

export const useStyles = () => {
  const fonts = useFonts();
  return StyleSheet.create({
    button: {
      ...fonts.button,
    },
  });
};
