/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable react/no-deprecated */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
/* eslint-disable class-methods-use-this */
import React from 'react';
import {
  View, Text, Dimensions, TouchableOpacity, Alert, Picker,
} from 'react-native';
import { Icon } from 'react-native-elements';
import axios from 'axios';
import DatePicker from 'react-native-datepicker';
import Moment from 'moment';
import { MonoText } from '../../components/StyledText';
import { FormIcon } from '../../components/FormIcon';
import styles from '../../Styles/FlightStyle';
import { normalize } from '../../constants/Font';
import Languages from '../../constants/Languages';
import CustomSpinner from '../../constants/SpinKit';

const deviceWidth = Dimensions.get('window').width;

export default class HotelForm extends React.Component {
  static navigationOptions = {
    title: Languages.hotel,
  };

  constructor(props) {
    super(props);
    this.state = {
      From: Moment(new Date()).format('YYYY-MM-DD'),
      To: Moment(Moment(new Date()).add(1, 'd').format('YYYY-MM-DD')),
      guests: '1 Room, 2 Adult, 0 Children ',
      pax: '1',
      city: {},
      data: {},
      continents: [],
      selectedContinents: 'as',
      countries: [],
      selectedCountries: 'ao',
      destinations: [],
      selectedDestinations: '18ed5',
      loading: false,
    };
    this.SearchHotel = this.SearchHotel.bind(this);
  }

 updateContinent = async (value) => {
   await this.setState({ loading: true });
   await this.setState({ selectedContinents: value });
   const response = await fetch(
     `http://macqueen.bsamat.com/api/v1/countries/${this.state.selectedContinents}`,
   );
   const responseJson = await response.json();
   await this.setState({ countries: responseJson.results });
   await this.setState({ loading: false });
 };

 updateCountries = async (value) => {
   await this.setState({ loading: true });
   await this.setState({ selectedCountries: value });
   const responseCountries = await fetch(
     `http://macqueen.bsamat.com/api/v1/destinations/${this.state.selectedCountries}`,
   );
   const responseJsonCountries = await responseCountries.json();
   await this.setState({ destinations: responseJsonCountries.results });
   await this.setState({ loading: false });
 };

 updateDestination = async (value) => {
   await this.setState({ loading: true });
   await this.setState({ selectedDestinations: value });
   const result = this.state.destinations.find(x => x.code === value);
   this.setState({ city: result });
   await this.setState({ loading: false });
 };

  returnFrom = () => {
    this.props.navigation.navigate('InputCity', {
      updateData: this.updateData,
    });
  };

  SearchHotel = async () => {
    await this.setState({ loading: true });
    const {
      From, To, selectedDestinations, pax,
    } = this.state;
    const Formdata = JSON.stringify({
      checkin: From,
      checkout: Moment(To).format('YYYY-MM-DD'),
      destination_code: selectedDestinations,
      pax,
    });
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    };
    const response = await axios
      .post('http://macqueen.bsamat.com/api/v1/search_hotel', Formdata, axiosConfig)
      .catch(() => {
        Alert.alert('Failed', 'check you conection', [{ text: 'Cancel', style: 'cancel' }]);
        this.setState({ loading: false });
      });
    await this.setState({ loading: false });
    if (response.data.count === 0) {
      Alert.alert('Sorry', 'No Hotel Available for this City', [{ text: 'Cancel', style: 'cancel' }]);
    } else {
      await this.props.navigation.navigate('HotelResult', {
        city: this.state.city,
        data: response.data,
      });
    }
  };

componentWillMount = async () => {
  await this.setState({ loading: true });
  const response = await fetch(
    'http://macqueen.bsamat.com/api/v1/continents',
  );
  const responseJson = await response.json();
  await this.setState({ continents: responseJson.results });
  const responseCountries = await fetch(
    'http://macqueen.bsamat.com/api/v1/countries/as',
  );
  const responseJsonCountries = await responseCountries.json();
  await this.setState({ countries: responseJsonCountries.results });
  const responseDestination = await fetch(
    'http://macqueen.bsamat.com/api/v1/destinations/ae',
  );
  const responseJsonDestination = await responseDestination.json();
  await this.setState({ destinations: responseJsonDestination.results });
  await this.setState({ loading: false });
}

render() {
  return (
    !this.state.loading
      ? <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
          <View
            style={{
              alignItems: 'center',
              backgroundColor: '#005e9c',
              width: deviceWidth,
              opacity: 0.5,
            }}
        >
          <Text style={{ fontFamily: 'Roboto', fontSize: 18, color: 'white' }}>
            More than 1 million hotels at your fingertips
          </Text>
        </View>
          <View>
          <Picker style={styles.PickerStyle}
        selectedValue={this.state.selectedContinents}
        onValueChange={(itemValue) => { setTimeout(() => { this.updateContinent(itemValue); }, 10); }}
        >
     {this.state.continents.map((l, i) => <Picker.Item value={l.code} label={l.name} key={i} />)}
    </Picker>
        </View>
          <View>
          <Picker style={styles.PickerStyle}
        selectedValue={this.state.selectedCountries}
        onValueChange={(itemValue) => { setTimeout(() => { this.updateCountries(itemValue); }, 10); }}
        >
     {this.state.countries.map((l, i) => <Picker.Item value={l.code} label={l.name} key={i} />)}
         </Picker>
        </View>
          <View>
          <Picker style={styles.PickerStyle}
        selectedValue={this.state.selectedDestinations}
        onValueChange={(itemValue) => { setTimeout(() => { this.updateDestination(itemValue); }, 10); }}
        >
     {this.state.destinations.map((l, i) => <Picker.Item value={l.code} label={l.name} key={i} />)}
         </Picker>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.DateContainer}>
            <Icon name="arrow-long-right" size={20} type="entypo" />
            <View style={{}}>
              <Text style={styles.dateText}>{Languages.ckeckin}</Text>
              <DatePicker
                style={{
                  width: 100,
                  height: 20,
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                }}
                date={this.state.From}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
              //  minDate="18-02-2019"
              //  maxDate="30-11-2019"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                customStyles={{
                  dateInput: {
                    backgroundColor: '#FFF',
                    borderWidth: 0,
                    height: 15,
                  },
                }}
                onDateChange={(From) => {
                  this.setState({ From });
                }}
              />
            </View>
          </View>
          <View style={styles.DateContainer}>
            <Icon
              name="arrow-long-left"
              size={20}
              type="entypo"
              containerStyle={{ marginLeft: 10 }}
            />
            <View>
              <Text style={styles.dateText}>{Languages.ckeckout}</Text>
              <DatePicker
                style={{
                  width: 100,
                  height: 20,
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                }}
                date={this.state.To}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
              //  minDate="17-02-2019"
              //  maxDate="30-12-2019"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                customStyles={{
                  dateInput: {
                    backgroundColor: '#FFF',
                    borderWidth: 0,
                    height: 15,
                  },
                }}
                onDateChange={(To) => {
                  this.setState({ To });
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.Input}>
          <FormIcon iname={'map-marker'} />
          <View>
            <Text style={{ fontSize: normalize(12), opacity: 0.6 }}>{Languages.guests}</Text>
            <Text style={{ fontSize: normalize(12) }}>{Languages.room}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.SearchHotel} >
          <MonoText style={styles.buttonText}>{Languages.search}</MonoText>
        </TouchableOpacity>
      </View>
      : <CustomSpinner/>

  );
}
}
