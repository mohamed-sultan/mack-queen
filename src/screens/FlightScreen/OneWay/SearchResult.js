/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { MonoText } from '../../../components/StyledText';
import FlightCard from '../../../components/FlightCards/FlightCard';
import FlightCardGeneral from '../../../components/FlightCards/FlightCardGeneral';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default class FlightResult extends React.Component {
  static navigationOptions = {
    title: 'Result',
  };

  button() {
    this.props.navigation.navigate('SubmitFlight');
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <ScrollView style={styles.container} horizontal={true}>
          <FlightCard
            titre="Cheapest price"
            startTime="23:30"
            startPlace="RUH"
            endTime="16:00"
            endPlace="DXB"
            Price="1.363"
            onPress={this.button.bind(this)}
          />
          <FlightCard
            titre="Shortest flight"
            startTime="23:55"
            startPlace="RUH"
            endTime="16:00"
            endPlace="DXB"
            Price="1.413"
            onPress={this.button.bind(this)}
          />
        </ScrollView>
        <MonoText style={{ fontSize: 20, color: 'gray', margin: 10 }}>More options</MonoText>
        <FlightCardGeneral
          startTime="23:55"
          startPlace="RUH"
          endTime="16:00"
          endPlace="DXB"
          Price="1.413"
          onPress={this.button.bind(this)}
        />
        <FlightCardGeneral
          startTime="23:55"
          startPlace="RUH"
          endTime="16:00"
          endPlace="DXB"
          Price="1.413"
          onPress={this.button.bind(this)}
        />
        <FlightCardGeneral
          startTime="23:55"
          startPlace="RUH"
          endTime="16:00"
          endPlace="DXB"
          Price="1.413"
          onPress={this.button.bind(this)}
        />
      </ScrollView>
    );
  }
}
