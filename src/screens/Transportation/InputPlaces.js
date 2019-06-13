/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
import Autocomplete from 'react-native-autocomplete-input';
import React, { Component } from 'react';
import {
  StyleSheet, View, TouchableOpacity, Text, Alert, Platform,
} from 'react-native';

class InputPlaces extends Component {
  static navigationOptions = {
    title: 'Search',
  };

  constructor(props) {
    super(props);
    this.state = {
      places: [],
      query: '',
      code: '',
    };
  }

  searchPlaces= async (query) => {
    if (query === '') {
      await this.setState({ places: [] });
    } else
    if (query.length >= 3) {
      const url = `http://modarre.si:8086/api/v1/transit/places/find?term=${query}`;
      // eslint-disable-next-line no-undef
      const response = await fetch(url, {
        method: 'GET',
      }).catch(() => {
        Alert.alert('Failed', 'check you conection', [{ text: 'Cancel', style: 'cancel' }]);
      });
      const responseJson = await response.json();

      await this.setState({ places: responseJson.result });
    }
  }

  goback = (description, code) => {
    const { navigation } = this.props;
    navigation.goBack();
    navigation.state.params.updateData(description, code);
  };

  _keyExtractor = item => item.id;

  _renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => { this.goback(item.description, item.id); }} style={{ height: 30, marginVertical: 5 }}>
      <Text style={styles.itemText}>
        {item.description}
      </Text>
    </TouchableOpacity>
  );

  render() {
    const { query } = this.state;
    return (
      <View style={styles.container}>
          <Autocomplete
          containerStyle={styles.autocompleteContainer}
          data={this.state.places}
          defaultValue={query}
          ItemSeparatorComponent= { (<View style={{ borderWidth: 1, borderColor: 'gray' }} />)}
          onChangeText={(itemValue) => { setTimeout(() => { this.searchPlaces(itemValue); }, 5); }}
          placeholder="Enter place"
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 20,
    padding: 5,
  },
  autocompleteContainer: {
    zIndex: 999,
    borderColor: '#87ceeb',
    margin: 10,
  },
  itemText: {
    fontSize: 17,
    marginLeft: 10,
    color: '#000000',
  },
});

export default InputPlaces;
