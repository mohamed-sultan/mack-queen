/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { View } from 'native-base';
import { MonoText } from '../../../components/StyledText';
import FlightCardTwoWay from '../../../components/FlightCards/FlightCardTwoWay';
import FlightCardTwoWayGeneral from '../../../components/FlightCards/FlightCardTwoWayGeneral';

const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    color: '#FFF',
    marginHorizontal: 5,
  },
  topcontainer: {
    width: deviceWidth / 2,
    backgroundColor: '#013447',
    alignItems: 'center',
    padding: 5,
  },
  cardBottom: {
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
    height: 38,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default class FlightSearchResulttwoWay extends React.Component {
  static navigationOptions = {
    title: 'Result',
  };

  constructor(props) {
    super(props);
    this.state = {
      color: 'white',
      active: null,
      active2: null,
    };
  }

  button() {
    this.props.navigation.navigate('SubmitFlight');
  }

  toggle(position) {
    if (this.state.active === position) {
      this.setState({ active: null });
    } else {
      this.setState({ active: position });
    }
  }

  toggle2(position) {
    if (this.state.active2 === position) {
      this.setState({ active2: null });
    } else {
      this.setState({ active2: position });
    }
  }

  myColor(position) {
    if (this.state.active === position) {
      return '#013447';
    }
    return '#FFF';
  }

  myColor2(position) {
    if (this.state.active2 === position) {
      return '#013447';
    }
    return '#FFF';
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <ScrollView style={{}}>
          <View style={styles.topcontainer}>
            <MonoText style={styles.text}>Departure</MonoText>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MonoText style={styles.text}> JED </MonoText>
              <Icon name="ios-airplane" type="ionicon" color="#FFF" />
              <MonoText style={styles.text}> RUH </MonoText>
            </View>
          </View>
          <FlightCardTwoWay
            color={this.myColor(0)}
            onPress={() => {
              this.toggle(0);
            }}
          />
          <FlightCardTwoWay
            color={this.myColor(1)}
            onPress={() => {
              this.toggle(1);
            }}
          />
          <FlightCardTwoWay
            color={this.myColor(2)}
            onPress={() => {
              this.toggle(2);
            }}
          />
          <FlightCardTwoWay
            color={this.myColor(3)}
            onPress={() => {
              this.toggle(3);
            }}
          />
        </ScrollView>
        <ScrollView>
          <View style={styles.topcontainer}>
            <MonoText style={styles.text}>Return</MonoText>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MonoText style={styles.text}> RUH </MonoText>
              <Icon name="ios-airplane" type="ionicon" color="#FFF" />
              <MonoText style={styles.text}> JED </MonoText>
            </View>
          </View>
          <View>
            <MonoText style={{ backgroundColor: '#fbb039', opacity: 0.5, fontSize: 12 }}>
              Best matching Return Flights
            </MonoText>
          </View>
          <FlightCardTwoWayGeneral
            color={this.myColor2(0)}
            onPress={() => {
              this.toggle2(0);
            }}
          />
          <FlightCardTwoWayGeneral
            color={this.myColor2(1)}
            onPress={() => {
              this.toggle2(1);
            }}
          />
          <FlightCardTwoWayGeneral
            color={this.myColor2(2)}
            onPress={() => {
              this.toggle2(2);
            }}
          />
          <FlightCardTwoWayGeneral
            color={this.myColor2(3)}
            onPress={() => {
              this.toggle2(3);
            }}
          />
        </ScrollView>
        <View style={styles.cardBottom}>
          <MonoText style={{ flex: 1, marginLeft: 20, fontSize: 15 }}>SAR 3,109</MonoText>
          <Button
            title="Continue"
            containerStyle={{ flex: 3 }}
            onPress={() => this.props.navigation.navigate('TravellerDetails')}
            buttonStyle={{ maxHeight: 30 }}
          />
        </View>
      </View>
    );
  }
}
