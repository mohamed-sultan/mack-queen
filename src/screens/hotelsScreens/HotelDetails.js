/* eslint-disable vars-on-top */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable class-methods-use-this */
import React from 'react';
import {
  View, Dimensions, Text, StyleSheet, ScrollView,
} from 'react-native';
import { Accordion } from 'native-base';
import ImageSlider from 'react-native-image-slider';
import { connect } from 'react-redux';
import { MonoText } from '../../components/StyledText';
import Amenities from '../../components/hotelCards/Amenities';

const deviceheight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 10,
    padding: 5,
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
});

class HotelDetails extends React.Component {
  static navigationOptions = {
    title: null,
  };

 state= {
   images: [],
 }

  componentDidMount = async () => {
    const arr = [];
    for (let i = 0; i < 8; i++) {
      arr.push(
        this.props.hotel.hotel_details.images[i].original,
      );
    }
    await this.setState({ images: arr });
  }

  render() {
    const { hotel } = this.props;
    const dataArray = [
      { title: 'hotel Introduction', content: hotel.hotel_details.descriptions.hotel_introduction },
      { title: 'Location', content: hotel.hotel_details.descriptions.location_information },
      { title: 'hotel Amenity', content: hotel.hotel_details.descriptions.hotel_amenity },
      { title: 'Rooms', content: hotel.hotel_details.descriptions.room_amenity },
    ];
    return (
      <ScrollView style={{ flex: 1 }}>
      <View style={{
        height: deviceheight / 4 + 10,
      }}>
      <ImageSlider
        loopBothSides
        autoPlayWithInterval={2000}
      images={this.state.images}/>
      </View>
        <MonoText style={{ fontSize: 17, margin: 7 }}>About the hotel</MonoText>
        <View style={styles.card} elevation={2}>
          <Text>
            {' '}
            {hotel.hotel_details.descriptions.hotel_information}..
            {' '}
          </Text>
        </View>
        <MonoText style={{ fontSize: 17, margin: 7 }}>Amenities</MonoText>
        <View style={styles.card}>
          <Amenities title="Wi-fi" icon="wifi" type="font-awesome" />
          <Amenities title="Room service" icon="room-service" type="material-community" />
          <Amenities title="Non-smoking" icon="smoke-free" type="material" />
          <Amenities title="Gym/fitness centre" icon="fitness-center" type="material" />
          <Amenities title="Shuttle to airoport" icon="airport-shuttle" type="material" />
          <Amenities title="restaurant" icon="restaurant" type="material" />
          <Amenities title="Shuttle service" icon="airport-shuttle" type="material" />
          <Amenities title="Parking" icon="local-parking" type="material" />
        </View>
        <View style={{ backgroundColor: '#FFF', marginTop: 20 }}>
          <Accordion dataArray={dataArray} expanded={0} />
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({
  hotel: state.hotel || {},
});
export default connect(mapStateToProps)(HotelDetails);
