/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { MonoText } from '../StyledText';
import { normalize } from '../../constants/Font';

const FlightResultCardHeader = props => (
  <View
    style={{
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      marginTop: 5,
    }}
  >
    <Image
      source={{
        uri: 'https://i.pinimg.com/originals/c5/db/f5/c5dbf5c944b9418d869547a525e76496.jpg',
      }}
      style={{ width: 27, height: 27, marginLeft: 7 }}
    />
    <View style={{ marginLeft: 15, opacity: 0.5 }}>
      <MonoText style={{ fontSize: normalize(11) }}>Saudi Gulf AirLine</MonoText>
      <MonoText style={{ fontSize: normalize(11) }}>6S-115</MonoText>
    </View>
    <Button
      title="First"
      containerStyle={{ position: 'absolute', right: 20 }}
      buttonStyle={{ maxHeight: 30 }}
    />
  </View>
);
export default FlightResultCardHeader;
