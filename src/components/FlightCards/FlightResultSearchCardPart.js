/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { MonoText } from '../StyledText';
import { normalize } from '../../constants/Font';

const FlightResultSearchCardPart = props => (
  <View style={{ flexDirection: 'row', paddingTop: 15 }}>
    <View style={{ marginLeft: 30, marginRight: 15 }}>
      <MonoText style={{ fontSize: normalize(12) }}>{props.time}</MonoText>
      <MonoText style={{ fontSize: normalize(10), opacity: 0.5 }}>{props.date}</MonoText>
    </View>
    <Icon name={props.iconName} type="material-community" color="black" />
    <View style={{ marginLeft: 10 }}>
      <MonoText style={{ fontSize: normalize(12) }}>{props.airoport}</MonoText>
      <MonoText style={{ fontSize: normalize(10), opacity: 0.5 }}>{props.place}</MonoText>
    </View>
  </View>
);
export default FlightResultSearchCardPart;
