/* eslint-disable eqeqeq */
/* eslint-disable import/prefer-default-export */
import { I18nManager } from 'react-native';
import RNRestart from 'react-native-restart';

export const changeAppLanguage = (lang) => {
  if (lang == 'en') {
    I18nManager.forceRTL(false);
    I18nManager.allowRTL(false);
    I18nManager.isRTL = false;
  } else {
    I18nManager.forceRTL(true);
    I18nManager.allowRTL(true);
    I18nManager.isRTL = true;
  }
  RNRestart.Restart();
};
