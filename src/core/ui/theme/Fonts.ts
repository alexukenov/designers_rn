import {Platform, TextStyle} from 'react-native';
import useColors from './Colors';

interface IFonts {
  button: TextStyle;
  authTitle: TextStyle;
  textInput: TextStyle;
}

// const sfProDisplayRegular = Platform.OS === 'android' ?
// 'sf_pro_display_regular' : 'SF Pro Display Regular';
// const sfProDisplayMedium = Platform.OS === 'android' ?
// 'sf_pro_display_medium' : 'SF Pro Display Medium';
const sfProDisplaySemibold =
  Platform.OS === 'android' ? 'sf_pro_display_semibold' : 'SF Pro Display Semibold';
const sfProDisplayBold = Platform.OS === 'android' ? 'sf_pro_display_bold' : 'SF Pro Display Bold';

const useFonts = (): IFonts => {
  const colors = useColors();
  return {
    button: {
      fontFamily: sfProDisplaySemibold,
      fontWeight: 600,
      fontSize: 17,
      lineHeight: 22,
      color: colors.mainText,
      textAlign: 'center',
    },
    authTitle: {
      fontFamily: sfProDisplayBold,
      fontWeight: 700,
      fontSize: 22,
      lineHeight: 28,
      color: colors.mainText,
    },
    textInput: {
      fontFamily: sfProDisplayBold,
      fontWeight: 600,
      fontSize: 28,
      lineHeight: 34,
    },
  };
};

export default useFonts;
