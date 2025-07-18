import {StyleSheet} from 'react-native';
import useColors from 'core/ui/theme/Colors';

export const useStyles = () => {
  const colors = useColors();
  return StyleSheet.create({
    container: {
      backgroundColor: colors.mainBg,
      flex: 1,
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 25,
    },
    icon: {
      position: 'absolute',
      top: '30%',
    },
    spinner: {
      position: 'absolute',
      top: '60%',
      gap: 16,
    },
  });
};
