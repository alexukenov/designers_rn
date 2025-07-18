import {StyleSheet, useWindowDimensions} from 'react-native';
import useColors from 'core/ui/theme/Colors';
import useFonts from 'core/ui/theme/Fonts';

export const useStyles = () => {
  const colors = useColors();
  const fonts = useFonts();
  const dimensions = useWindowDimensions();
  return StyleSheet.create({
    safeArea: {flex: 1},
    container: {
      flex: 1,
      position: 'relative',
      gap: 20,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      marginBottom: '70%',
    },
    title: {
      ...fonts.authTitle,
    },
    logo: {
      alignItems: 'center',
      paddingVertical: 28,
    },
    gradient: {
      position: 'absolute',
      width: dimensions.width,
      height: dimensions.height,
      left: 0,
      right: 0,
    },
    field: {
      ...fonts.textInput,
      backgroundColor: '#74748014',
      borderRadius: 10,
      paddingVertical: 16,
      paddingHorizontal: 20,
    },
    buttonContainer: {
      backgroundColor: colors.primary,
      paddingVertical: 14,
      alignItems: 'center',
      borderRadius: 14,
    },
    buttonText: {
      ...fonts.button,
      color: colors.mainTextInverse,
    },
    secondaryButtonContainer: {
      backgroundColor: colors.semiPrimary,
      paddingVertical: 14,
      alignItems: 'center',
      borderRadius: 14,
    },
    secondaryButtonText: {
      ...fonts.button,
      color: colors.primary,
    },
  });
};
