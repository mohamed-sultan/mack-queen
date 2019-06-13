/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  StyleSheet, Dimensions, View, ActivityIndicator, TouchableOpacity,
} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { normalize } from '../../constants/Font';
import { MonoText } from '../StyledText';

const deviceWidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  Bottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 5,
  },
  card: {
    marginLeft: 5,
    backgroundColor: '#FFF',
    height: deviceheight / 7,
    borderRadius: 5,
    margin: 5,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
});
class RoomCard extends React.Component {
  BookRoom = async () => {
    await this.props.navigation.navigate('SubmitHotel', {
      code: this.props.code,
      price: this.props.price,
    });
  }

  render() {
    return (
  <TouchableOpacity elevation={5} style={styles.card} onPress={this.BookRoom}>
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
        <MonoText>Room only</MonoText>
        <View style={{ flexDirection: 'row' }}>
          <MonoText>Fits 2</MonoText>
          <Icon name="group" size={15} type="material" />
        </View>
      </View>
      <View style={{ flexDirection: 'row', padding: 5 }}>
        <MonoText>Non-refundable</MonoText>
        <Icon name="alert-circle-outline" size={17} color="blue" type="material-community" />
      </View>
    </View>
    <View style={styles.Bottom}>
      <View style={{ flexDirection: 'row' }}>
        <MonoText style={{ color: 'gray', opacity: 0.7, fontSize: normalize(12) }}>Total for {this.props.nights} night</MonoText>
        <MonoText style={{ marginLeft: 20, fontSize: normalize(13) }}>
        { this.props.currency}
          {' '}
        {this.props.price}
        </MonoText>
      </View>
      <Button title="Select" buttonStyle={{ maxHeight: 30, width: 70 }} onPress={this.props.onPress} />
    </View>
  </TouchableOpacity>
    );
  }
}
export default RoomCard;
