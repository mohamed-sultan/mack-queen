/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable class-methods-use-this */
import React from 'react';
import {
  ImageBackground, View, Dimensions, ScrollView, FlatList,
} from 'react-native';
import { connect } from 'react-redux';

import Stars from 'react-native-stars';
import RoomCard from '../../components/hotelCards/RoomCard';
import { MonoText } from '../../components/StyledText';

const deviceheight = Dimensions.get('window').height;

class RoomDetails extends React.Component {
  static navigationOptions = {
    title: null,
  };

  _keyExtractor = item => item.code;

  _renderItem = ({ item }) => (
    <RoomCard
     key={item.code}
     currency={item.currency}
     nights= {Object.keys(item.rooms[0].nightly_prices).length}
     price={item.price}
     navigation={this.props.route.navigation}
     code={item.code}
    />
  );

  render() {
    const { hotel } = this.props;
    const image = this.props.hotel.hotel_details.images[0].original;
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={{ uri: image }}
          style={{
            width: '100%',
            height: deviceheight / 4 + 10,
            resizeMode: 'center',
            alignContent: 'flex-start',
            justifyContent: 'flex-end',
          }}
        >
          <MonoText style={{ fontSize: 16, color: '#FFF', marginHorizontal: 15 }}>
          {hotel.hotel_details.name}
              </MonoText>
          <View style={{ alignItems: 'flex-start', margin: 10 }}>
            <Stars
              default={hotel.hotel_details.stars}
              display={hotel.hotel_details.stars}
              spacing={5}
              count={5}
              starSize={20}
              backingColor="rgba(255,255,255, 0)"
              fullStar={require('../../assets/images/fill-star.png')}
              emptyStar={require('../../assets/images/empty-star.png')}
            />
          </View>
        </ImageBackground>
        <ScrollView>
          <MonoText style={{ fontSize: 18, margin: 5 }}> Standard Double</MonoText>
          <FlatList
        data={hotel.products}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  hotel: state.hotel || {},
});
export default connect(mapStateToProps)(RoomDetails);
