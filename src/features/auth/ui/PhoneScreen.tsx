import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import IconLogo from 'icons/ic_logo';
import {useStyles} from './useStyles';
import I18n from 'i18n/i18n';
import {KeyboardAvoidingView} from 'react-native-keyboard-controller';
import {AnimatedBackground} from 'core/ui/animated_background/AnimatedBackground';
import PhoneInput from 'core/ui/phone_input/PhoneInput';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'root/store/store';
import {setPhone} from '../state/testSlice';

const PhoneScreen = () => {
  const styles = useStyles();
  const phone = useSelector((state: RootState) => state.phone.phone);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.safeArea}>
      <AnimatedBackground />
      <KeyboardAvoidingView
        behavior={'padding'}
        keyboardVerticalOffset={50}
        style={styles.container}>
        <View style={styles.logo}>
          <IconLogo />
        </View>
        <Text style={styles.title}>{I18n.t('enter_phone_number')}</Text>
        <PhoneInput phone={phone} setPhone={value => dispatch(setPhone(value))} />
        <TouchableOpacity activeOpacity={0.5} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{I18n.t('request_code')}</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={styles.secondaryButtonContainer}>
          <Text style={styles.secondaryButtonText}>{I18n.t('request_code')}</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PhoneScreen;
