/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { MonoText } from '../../components/StyledText';
import FlightResultSearchCardPart from '../../components/FlightCards/FlightResultSearchCardPart';
import FlightResultCardHeader from '../../components/FlightCards/FlightResultCardHeader';
import { normalize } from '../../constants/Font';

const Dwidth = Dimensions.get('window').width;
const Dheight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: Dwidth - 15,
    height: Dheight / 3,
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

export default class SubmitFlight extends React.Component {
  static navigationOptions = {
    title: 'Review your trip',
  };

  render() {
    return (
      <View style={styles.container}>
        <MonoText style={{ fontSize: normalize(15), margin: 15 }}>Your trip to dubai</MonoText>
        <View elevation={5} style={styles.card}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              padding: 10,
              borderBottomWidth: 0.3,
            }}
          >
            <Icon raised name="ios-american-football" type="ionicon" color="#ffaf20" size={15} />
            <View>
              <MonoText>Riyadh to Dubai</MonoText>
              <MonoText style={{ opacity: 0.5, fontSize: normalize(10) }}>Flight duration: 01h 55m</MonoText>
            </View>
            <View style={{ position: 'absolute', right: 30 }}>
              <MonoText>19 Feb 2019</MonoText>
              <MonoText style={{ opacity: 0.5, fontSize: normalize(10) }}>17:00</MonoText>
            </View>
          </View>
          <View style={{ flex: 4 }}>
            <FlightResultCardHeader />
            <View style={{ flex: 3 }}>
              <FlightResultSearchCardPart
                time="23:30"
                date="19 Feb"
                iconName="airplane-takeoff"
                airoport="King khaled International Airoport(RUH)"
                place="Riyadh, Saudi Arabia"
              />
              <FlightResultSearchCardPart
                time="23:30"
                date="19 Feb"
                iconName="airplane-landing"
                airoport="King khaled International Airoport(RUH)"
                place="Riyadh, Saudi Arabia"
              />
            </View>
          </View>
        </View>
        <View style={styles.cardBottom}>
          <MonoText style={{ flex: 1, marginLeft: 20, fontSize: normalize(15) }}>SAR 3,109</MonoText>
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
