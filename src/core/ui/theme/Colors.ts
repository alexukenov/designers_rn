import {useColorScheme} from 'react-native';

interface IColors {
  primary: string;
  semiPrimary: string;
  mainTextInverse: string;
  mainBg: string;
  mainText: string;
  disable: string;
}

const useColors = (): IColors => {
  const isDark = useColorScheme() === 'dark';
  return isDark
    ? {
        primary: '#0066FF',
        semiPrimary: '#0066FF15',
        mainTextInverse: '#FFFFFF',
        mainBg: '#FFFFFF',
        mainText: '#1C2431',
        disable: '#979797ff',
      }
    : {
        primary: '#0066FF',
        semiPrimary: '#0066FF15',
        mainTextInverse: '#FFFFFF',
        mainBg: '#FFFFFF',
        mainText: '#1C2431',
        disable: '#979797ff',
      };
};

export default useColors;
