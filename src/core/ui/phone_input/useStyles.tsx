import {StyleSheet} from 'react-native';
import useFonts from 'core/ui/theme/Fonts';

export const useStyles = () => {
  const fonts = useFonts();
  return StyleSheet.create({
    field: {
      ...fonts.textInput,
      backgroundColor: '#74748014',
      borderRadius: 10,
      paddingVertical: 16,
      paddingHorizontal: 20,
    },
  });
};
