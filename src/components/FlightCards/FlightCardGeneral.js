/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  View, StyleSheet, Dimensions, Text, Image,
} from 'react-native';
import { Button } from 'react-native-elements';

const Dwidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  card: {
    width: Dwidth - 30,
    height: 140,
    backgroundColor: '#FFF',
    borderRadius: 5,
    margin: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  textHeader: {
    color: '#FFF',
  },
  CardPart2: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomWidth: 0.3,
  },
  CardPart3: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textPrice: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    marginLeft: 15,
  },
});
const FlightCardGeneral = props => (
  <View elevation={5} style={styles.card}>
    <View style={styles.CardPart2}>
      <Image
        source={{
          uri: 'https://i.pinimg.com/originals/c5/db/f5/c5dbf5c944b9418d869547a525e76496.jpg',
        }}
        style={{ width: 30, height: 30, marginLeft: 7 }}
      />
      <View>
        <Text style={{ fontSize: 11 }}>{props.startTime}</Text>
        <Text style={{ fontSize: 11 }}>{props.startPlace}</Text>
      </View>
      <Image
        source={require('../../assets/icons/plane-track-icon.png')}
        style={{ width: 120, height: 30, marginLeft: 7 }}
      />
      <View>
        <Text style={{ fontSize: 11 }}>{props.endTime}</Text>
        <Text style={{ fontSize: 11 }}>{props.endPlace}</Text>
      </View>
    </View>
    <View style={styles.CardPart3}>
      <Text style={styles.textPrice}>SAR {props.Price}</Text>
      <Button title="Select" buttonStyle={{ marginRight: 30 }} onPress={props.onPress} />
    </View>
  </View>
);
export default FlightCardGeneral;
