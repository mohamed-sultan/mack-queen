/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { MonoText } from '../StyledText';
import { normalize } from '../../constants/Font';

const FlightCardTwoWayGeneral = props => (
  <TouchableOpacity
    style={{
      flexDirection: 'row',
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
      backgroundColor: props.color,
    }}
    onPress={props.onPress}
  >
    <View style={{ flex: 1, padding: 10, alignItems: 'flex-end' }}>
      <MonoText style={{ fontSize: normalize(13) }}>3:30 | 5:20</MonoText>
      <MonoText style={{ fontSize: normalize(10), opacity: 0.5 }}>5h:40 1 Stop</MonoText>
      <MonoText style={{ fontSize: normalize(13), color: '#049acd', marginLeft: 10 }}>
        765 SAR
      </MonoText>
    </View>
    <Image
      source={{
        uri: 'https://i.pinimg.com/originals/c5/db/f5/c5dbf5c944b9418d869547a525e76496.jpg',
      }}
      resizeMode="center"
      style={{
        width: 45,
        height: 50,
        borderRadius: 7,
        flex: 1,
        margin: 10,
        marginLeft: 20,
      }}
    />
  </TouchableOpacity>
);
export default FlightCardTwoWayGeneral;
