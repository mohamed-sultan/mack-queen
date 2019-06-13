/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  StyleSheet, Dimensions, View, ActivityIndicator, TouchableOpacity,
} from 'react-native';
import { Image, Icon } from 'react-native-elements';

import { MonoText } from '../StyledText';

const deviceWidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: deviceWidth / 2 - 20,
    alignItems: 'center',
    padding: 5,
    opacity: 0.5,
  },
});

const Amenities = props => (
  <View style={styles.container}>
    <Icon name={props.icon} type={props.type} color="#517fa4" />
    <MonoText style={{ marginLeft: 10 }}>{props.title}</MonoText>
  </View>
);
export default Amenities;
