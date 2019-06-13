/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

class InputCity extends Component {
  static navigationOptions = {
    title: 'Search',
  };

  goback = (data, location) => {
    const { navigation } = this.props;
    navigation.goBack();
    navigation.state.params.updateData(data, location);
  };

  render() {
    return (
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          minLength={2}
          autoFocus={false}
          returnKeyType={'search'}
          listViewDisplayed="auto" // true/false/undefined
          fetchDetails={true}
          renderDescription={row => row.description} // custom description render
          onPress={(data, details = null) => {
            this.goback(data.description, details.geometry.location);
          }}
          getDefaultValue={() => ''}
          query={{
            key: ' AIzaSyArIBnV-AeSp0tE6U6vTQqn_1LlAf38H8U',
            language: 'en', // language of the results
            types: '(cities)', // default: 'geocode'
          }}
          styles={{
            textInputContainer: {
              width: '100%',
            },
            description: {
              fontWeight: 'bold',
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
          currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
          currentLocationLabel="Current location"
          nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
          GooglePlacesSearchQuery={{
            // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
            rankby: 'distance',
            types: 'food',
          }}
          filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
          debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default InputCity;
