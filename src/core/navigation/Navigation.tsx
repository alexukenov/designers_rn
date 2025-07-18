import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStaticNavigation, StackActions} from '@react-navigation/native';
import SplashScreen from '../../features/splash/ui/SplashScreen';
import PhoneScreen from '../../features/auth/ui/PhoneScreen';

export const Screens = {
  Splash: 'Splash',
  Phone: 'Phone',
};
export const Actions = {
  GoPhone: StackActions.push(Screens.Phone),
};

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Splash',
  screenOptions: {
    header: () => {
      return null;
    },
  },
  screens: {
    [Screens.Splash]: SplashScreen,
    [Screens.Phone]: PhoneScreen,
  },
});

export const Navigation = createStaticNavigation(RootStack);
