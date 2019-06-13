/* eslint-disable no-return-assign */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { ScrollView, View, FlatList } from 'react-native';
import { MapView } from 'expo';
import { withNavigation } from 'react-navigation';
import HotelCard from '../../components/hotelCards/MainCard';

class HotelResult extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.city.name,
  });

  constructor(props) {
    super(props);
    this.state = {
      latitude: this.props.navigation.state.params.city.latitude,
      longitude: this.props.navigation.state.params.city.longitude,
      data: this.props.navigation.state.params.data,
      markers: [],
    };
  }

componentDidMount = async () => {
  const arr = [];
  await this.props.navigation.state.params.data.results.map(obj => (
    arr.push({
      latitude: obj.hotel_details.latitude,
      longitude: obj.hotel_details.longitude,
      title: obj.hotel_details.name,
      subtitle: 'hotell',
    })
  ));
  await this.setState({ markers: arr });
}

  _keyExtractor = item => item.hotel_code;

  _renderItem = ({ item }) => (
   <HotelCard
   key={item.hotel_code}
   data= {item}
   hotel_details={item.hotel_details}
   navigation={this.props.navigation}
    />
  );

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{
            width: '100%',
            height: '30%',
          }}
          initialRegion={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 1,
          }}

        >

          {this.state.markers.map((marker, i) => (
                    <MapView.Marker
                        key={i}
                        coordinate={marker}
                        title={marker.title}

                    />
          ))}
        </MapView>

        <ScrollView style={{ flex: 3 }}>
        <FlatList
        data={this.state.data.results}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
        </ScrollView>
      </View>
    );
  }
}
export default withNavigation(HotelResult);
