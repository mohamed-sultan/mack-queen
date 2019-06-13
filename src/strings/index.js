import React, { Component } from 'react';
import {
  I18nManager,
} from 'react-native';
import LocalizedStrings from 'react-native-localization';
import en from './en'
import ar from './ar'
import {LanguageHelper} from '../Helpers'

let strings = new LocalizedStrings({
    en,
    ar
});

if(I18nManager.isRTL){
  I18nManager.allowRTL(true)
  strings.setLanguage('ar')
}else{
  I18nManager.allowRTL(false)
  strings.setLanguage('en')
}


export default strings;