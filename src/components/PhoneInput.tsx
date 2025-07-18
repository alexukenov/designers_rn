import React from 'react';
import {useGlobalStyles} from '../core/ui/GlobalStyles';
import MaskInput from 'react-native-mask-input';
import useColors from 'core/ui/theme/Colors';

const PhoneInput = () => {
  const [phone, setPhone] = React.useState('');
  const styles = useGlobalStyles();
  const colors = useColors();

  // const getPhoneMask = (currentPhone: string) => {
  //   if (
  //     currentPhone.startsWith('+7') ||
  //     currentPhone.startsWith('7') ||
  //     currentPhone.startsWith('8')
  //   ) {
  //     return CUSTOM_MASKS.RUS_PHONE;
  //   } else if (currentPhone.startsWith('+34') || currentPhone.startsWith('34')) {
  //     return CUSTOM_MASKS.ESP_PHONE;
  //   } else if (currentPhone.startsWith('+55') || currentPhone.startsWith('55')) {
  //     return CUSTOM_MASKS.BRA_PHONE;
  //   }
  //   return Masks.USA_PHONE;
  // };

  // const currentMask = getPhoneMask(phone);

  return (
    <MaskInput
      value={phone}
      cursorColor={colors.mainText}
      onChangeText={(masked, unmasked) => {
        if (unmasked.length === 1 && unmasked.startsWith('9')) {
          setPhone('7' + masked);
          return;
        }
        setPhone(masked);
      }}
      mask={[
        '+',
        /\d/,
        ' ',
        '(',
        /\d/,
        /\d/,
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
      ]}
      style={styles.field}
      placeholderTextColor={colors.disable}
      placeholder="+7 (___) ___-__-__"
      keyboardType="phone-pad"
    />
  );
};

export default PhoneInput;

// const CUSTOM_MASKS = {
//   RUS_PHONE: [
//     '+',
//     '7',
//     ' ',
//     '(',
//     /\d/,
//     /\d/,
//     /\d/,
//     ')',
//     ' ',
//     /\d/,
//     /\d/,
//     /\d/,
//     '-',
//     /\d/,
//     /\d/,
//     '-',
//     /\d/,
//     /\d/,
//   ],
//   ESP_PHONE: ['+', '3', '4', ' ', /\d/, /\d/,
//  /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/],
//   BRA_PHONE: [
//     '+',
//     '5',
//     '5',
//     ' ',
//     '(',
//     /\d/,
//     /\d/,
//     ')',
//     ' ',
//     /\d/,
//     /\d/,
//     /\d/,
//     /\d/,
//     '-',
//     /\d/,
//     /\d/,
//     /\d/,
//     /\d/,
//   ],
// };
