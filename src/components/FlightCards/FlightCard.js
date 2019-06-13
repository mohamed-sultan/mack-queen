/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  View, StyleSheet, Dimensions, Text, Image,
} from 'react-native';
import { LinearGradient } from 'expo';
import { Icon, Button } from 'react-native-elements';

const Dwidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  card: {
    width: Dwidth - Dwidth / 4,
    height: 160,
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
  cardHeader: {
    flex: 1.5,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textHeader: {
    color: '#FFF',
  },
  CardPart2: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
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

const FlightCard = props => (
  <View elevation={2} style={styles.card}>
    <LinearGradient
      colors={['#FE788D', '#FF9876']}
      style={styles.cardHeader}
      start={[0, 0]}
      end={[1, 0]}
    >
      <Text style={styles.textHeader}>{props.titre}</Text>
      <Icon raised name="ios-american-football" type="ionicon" color="#ffaf20" size={8} />
    </LinearGradient>
    <View style={{ flex: 4 }}>
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
        <Button title="Select" buttonStyle={{ marginRight: 10 }} onPress={props.onPress} />
      </View>
    </View>
  </View>
);
export default FlightCard;
