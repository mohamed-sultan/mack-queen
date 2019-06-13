/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
/* eslint-disable class-methods-use-this */
import React from 'react';
import {
  View, Text, TouchableOpacity, Alert,
} from 'react-native';
import { Icon, ButtonGroup } from 'react-native-elements';
import Moment from 'moment';
import axios from 'axios';
import DatePicker from 'react-native-datepicker';
import styles from '../../Styles/FlightStyle';
import { normalize } from '../../constants/Font';
import { MonoText } from '../../components/StyledText';
import Languages from '../../constants/Languages';

export default class TransportationForm extends React.Component {
  static navigationOptions = {
    title: 'Search for Car',
  };

  constructor(props) {
    super(props);
    this.state = {
      From: Moment(new Date()).format('YYYY-MM-DD'),
      To: Moment(Moment(new Date()).add(1, 'd').format('YYYY-MM-DD')),
      FromPlace: '',
      FromCode: '',
      ToPlace: '',
      ToCode: '',
      accepted: false,
      Cabin: 2,
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateData = (description, code) => {
    this.setState({ FromPlace: description, FromCode: code });
  };

  returnFrom = () => {
    this.props.navigation.navigate('InputPlaces', {
      updateData: this.updateData,
    });
  };

  updateData2 = async (description, code) => {
    await this.setState({ ToPlace: description, ToCode: code });
  };

  returnFrom2 = () => {
    this.props.navigation.navigate('InputPlaces', {
      updateData: this.updateData2,
    });
  };

  navigate = async () => {
    this.props.navigation.navigate('CarChoices');

    /*
    const {
      FromCode, ToCode,
    } = this.state;
    const Formdata = JSON.stringify({
      start_place_id: FromCode,
      finish_place_id: ToCode,
    });
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    };
    const response = await axios
      .post('http://modarre.si:8086/api/v1/transit/prices', Formdata, axiosConfig)
      .catch(() => {
        Alert.alert('Failed', 'check you conection', [{ text: 'Cancel', style: 'cancel' }]);
      });
    console.log(response);
  //  await this.setState({ countries: responseJson.results });
  //  this.props.navigation.navigate('CarChoices');
  */
  };

  updateIndex(Cabin) {
    this.setState({ Cabin });
  }

  render() {
    const buttons = ['Economy', 'Business', 'Standard', 'MiniVan'];
    const { Cabin } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.flightCard}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,
              paddingVertical: 5,
            }}
            onPress={this.returnFrom}
          >
            <Icon color="gray" name="target" type="material-community" size={20} />
            <View style={{ marginHorizontal: 20 }}>
              <Text style={{ fontSize: 12, opacity: 0.6 }}>{Languages.from}</Text>
              <Text style={{ fontSize: normalize(12) }}>{this.state.FromPlace}</Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: 'gray',
              borderBottomWidth: 0.5,
              marginLeft: 50,
              justifyContent: 'center',
            }}
          >
            <Icon
              color="blue"
              name="swap-vert"
              type="material"
              size={25}
              containerStyle={{
                position: 'absolute',
                right: 10,
                zIndex: 999,
                backgroundColor: '#FFF',
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,
              paddingVertical: 5,
            }}
            onPress={this.returnFrom2}
          >
            <Icon color="gray" name="map-marker" type="material-community" size={20} />
            <View style={{ marginHorizontal: 20 }}>
              <Text style={{ fontSize: 12, opacity: 0.6 }}>{Languages.to}</Text>
              <Text style={{ fontSize: normalize(12) }}>{this.state.ToPlace}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.DateContainer}>
            <Icon name="arrow-long-right" size={20} type="entypo" />
            <View style={{}}>
              <Text style={styles.dateText}>{Languages.pickUp}</Text>
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
              <Text style={styles.dateText}>{Languages.return}</Text>
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

        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={Cabin}
          buttons={buttons}
          containerStyle={styles.groupButton}
        />
        <TouchableOpacity style={styles.button} onPress={() => this.navigate()}>
          <MonoText style={styles.buttonText}>{Languages.search}</MonoText>
        </TouchableOpacity>
      </View>
    );
  }
}
