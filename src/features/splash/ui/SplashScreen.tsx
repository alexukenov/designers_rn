import {Text, View} from 'react-native';
import React from 'react';
import {useStyles} from './useStyles';
import I18n from 'i18n/i18n';
import SplashIcon from 'icons/ic_splash';
import {AnimatedBackground} from 'core/ui/animated_background/AnimatedBackground';
import {useNavigation} from '@react-navigation/native';
import {TextButton} from 'core/ui/text_button/TextButton';
import {Actions} from 'root/navigation/Navigation';
import {useGetFactQuery} from 'features/splash/network/ExampleApi';

const SplashScreen = () => {
  const styles = useStyles();
  const navigation = useNavigation();

  const {data, isLoading} = useGetFactQuery('Alex');

  return (
    <View style={styles.container}>
      <AnimatedBackground />
      <View style={styles.icon}>
        <SplashIcon />
      </View>
      <View style={styles.spinner}>
        {isLoading && (
          <TextButton
            title={I18n.t('go_enter_phone')}
            onPress={() => navigation.dispatch(Actions.GoPhone)}
          />
        )}
        {!!data && (
          <View>
            <Text>Alex {data.age} years old</Text>
            <TextButton
              title={`press on ${data.name}`}
              onPress={() => navigation.dispatch(Actions.GoPhone)}
            />
          </View>
        )}
        {!isLoading && !data && (
          <TextButton
            title={I18n.t('go_enter_phone')}
            onPress={() => navigation.dispatch(Actions.GoPhone)}
          />
        )}
      </View>
    </View>
  );
};

export default SplashScreen;
