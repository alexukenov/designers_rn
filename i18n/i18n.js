import I18n from 'react-native-i18n';
import en from './locales/en';
import ru from './locales/ru';
import ptRBR from './locales/pt-BR';
import es from './locales/es';

I18n.fallbacks = true;

I18n.translations = {
  en,
  ru,
  'pt-BR': ptRBR,
  es,
};

export default I18n;
