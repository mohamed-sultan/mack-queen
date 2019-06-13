/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  StyleSheet, Dimensions, View, ActivityIndicator, TouchableOpacity,
} from 'react-native';
import { Image, Rating } from 'react-native-elements';
import { connect } from 'react-redux';
import { getHotel } from '../../redux/actions/hotel';

import { MonoText } from '../StyledText';

const deviceWidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    marginLeft: 5,
    backgroundColor: '#FFF',
    width: deviceWidth - 10,
    height: deviceheight / 5,
    flexDirection: 'row',
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
});
class HotelCard extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      image: 'https://d1yn1kh78jj1rr.cloudfront.net/image/preview/HoOuq_OD-j64ywky8/storyblocks-vector-cartoon-background-with-reception-desk-in-hotel-receptionist-workplace-empty-waiting-room-hall-in-business-office-modern-interior-with-furniture-sofa-for-customers-open-elevator_Sul4qWY357_SB_PM.jpg',
      hotelName: 'hotelName',
      stars: 3,
      hotelAddress: 'unknown',
    };
    this.Navigate = this.Navigate.bind(this);
  }

  Navigate = async () => {
    await this.props.onHotel(this.props.data);
    await this.props.navigation.navigate('AvailbleRooms', {
      name: this.props.data.hotel_details.name,
    });
  }

  componentDidMount = async () => {
    await this.setState({
      image: this.props.hotel_details.images[0].original || 'https://d1yn1kh78jj1rr.cloudfront.net/image/preview/HoOuq_OD-j64ywky8/storyblocks-vector-cartoon-background-with-reception-desk-in-hotel-receptionist-workplace-empty-waiting-room-hall-in-business-office-modern-interior-with-furniture-sofa-for-customers-open-elevator_Sul4qWY357_SB_PM.jpg',
      hotelName: this.props.hotel_details.name,
      stars: this.props.hotel_details.stars,
      hotelAddress: this.props.hotel_details.address,
    });
  }

  render() {
    return (
  <TouchableOpacity
    elevation={5}
    style={styles.card}
    onPress={this.Navigate}
  >
    <Image
      source={{
        uri: this.state.image,
      }}
      style={{ width: 130, height: 150, flex: 1 }}
      imageStyle={{ resizeMode: 'stretch' }}
      PlaceholderContent={<ActivityIndicator />}
    />
    <View style={{ margin: 5, flex: 3 }}>
      <MonoText style={{ fontSize: 16 }}>{this.state.hotelName}</MonoText>
      <Rating
        imageSize={17}
        readonly
        startingValue={this.state.stars}
        style={{ alignItems: 'flex-start', marginVertical: 10 }}
        ratingBackgroundColor="transparent"
      />
      <MonoText style={{ color: 'gray', fontSize: 15 }}>{this.state.hotelAddress}</MonoText>
      <MonoText
        style={{
          fontSize: 17,
          position: 'absolute',
          bottom: 10,
          right: 10,
        }}
      >
      </MonoText>
    </View>
  </TouchableOpacity>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  onHotel: (hotel) => {
    dispatch(getHotel(hotel));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(HotelCard);
