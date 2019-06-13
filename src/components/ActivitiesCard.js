/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-use-before-define */
import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { MonoText } from './StyledText';

export class ActivitiesCard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View styles={{ opacity: 0.5 }}>
          <MonoText style={{ fontSize: 20 }}>Divident payout</MonoText>
          <MonoText style={{ fontSize: 15, fontFamily: 'Roboto' }}>08 Jan, 2010</MonoText>
        </View>
        <MonoText style={styles.date}> - $ 1000.42 </MonoText>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  date: {
    fontSize: 15,
    fontFamily: 'Roboto',
    color: 'red',
    marginTop: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
  },
});
