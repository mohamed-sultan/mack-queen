/* eslint-disable no-return-assign */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable class-methods-use-this */
import React from 'react';
import {
  StyleSheet, View, Dimensions, Alert,
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';
import CustomSpinner from '../../constants/SpinKit';

import { MonoText } from '../../components/StyledText';
import { normalize } from '../../constants/Font';

const Dwidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    width: Dwidth - 20,
    backgroundColor: '#FFF',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    shadowColor: 'gray',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  InputStyle: {
    borderBottomWidth: 0.2,
    borderColor: 'gray',
    backgroundColor: 'white',
    //  width: '90%',
    alignSelf: 'center',
  },
  InputCard: {
    backgroundColor: '#FFF',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    shadowColor: 'gray',
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

export default class SubmitHotel extends React.Component {
  static navigationOptions = {
    title: 'Guests details',
  };

  constructor(props) {
    super(props);
    this.state = {
      FirstName: '',
      LastName: '',
      GuestFirstName: '',
      GuestLasttName: '',
      Email: '',
      PhoneNumber: '',
      code: this.props.navigation.state.params.code,
      price: this.props.navigation.state.params.price,
      loading: false,
    };
  }

  BookRoom = async () => {
    await this.setState({ loading: true });
    const {
      FirstName, LastName, GuestFirstName, GuestLasttName, Email, PhoneNumber, code,
    } = this.state;
    const Formdata = JSON.stringify({
      first_name: [
        FirstName,
        GuestFirstName,
      ],
      last_name: [
        LastName,
        GuestLasttName,
      ],
      email: Email,
      phone_number: PhoneNumber,

      product_code: code,
    });
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    };
    const response = await axios
      .post('http://macqueen.bsamat.com/api/v1/book_hotel_with_provision', Formdata, axiosConfig)
      .catch(() => {
        Alert.alert('Failed', 'check you conection', [{ text: 'Cancel', style: 'cancel' }]);
        this.setState({ loading: false });
      });
    await this.setState({ loading: false });
    if (response.data.error_code === '4410') {
      Alert.alert('Sorry', response.data.detail);
    }
    console.log(response);
  };

  render() {
    return (
      !this.state.loading
        ? <View style={styles.container}>
        <MonoText style={{ fontSize: 17, margin: 15, alignSelf: 'flex-start' }}>
          Contact details*
        </MonoText>
        <View elevation={3} style={styles.InputCard}>
          <Input
            placeholder="Guest one FirstName"
            keyboardType="default"
            inputContainerStyle={styles.InputStyle}
            onSubmitEditing={() => this.LastName.focus()}
            inputStyle={{ color: 'gray' }}
            returnKeyType="next"
            onChangeText={FirstName => this.setState({ FirstName })}
            errorStyle={{ color: 'red', alignSelf: 'center' }}
            errorMessage={this.state.NameError}
          />
          <Input
            placeholder="Guest one Last Name"
            keyboardType="default"
            ref={input => (this.LastName = input)}
            onSubmitEditing={() => this.GuestFirstName.focus()}
            inputContainerStyle={styles.InputStyle}
            inputStyle={{ color: 'gray' }}
            returnKeyType="next"
            onChangeText={LastName => this.setState({ LastName })}
            errorStyle={{ color: 'red', alignSelf: 'center' }}
            errorMessage={this.state.NameError}
          />
          <Input
            placeholder="Guest two FirstName"
            keyboardType="default"
            ref={input => (this.GuestFirstName = input)}
            onSubmitEditing={() => this.GuestLasttName.focus()}
            inputContainerStyle={styles.InputStyle}
            inputStyle={{ color: 'gray' }}
            returnKeyType="next"
            onChangeText={GuestFirstName => this.setState({ GuestFirstName })}
            errorStyle={{ color: 'red', alignSelf: 'center' }}
            errorMessage={this.state.NameError}
          />
          <Input
            placeholder="Guest two Last Name"
            keyboardType="default"
            ref={input => (this.GuestLasttName = input)}
            onSubmitEditing={() => this.Email.focus()}
            inputContainerStyle={styles.InputStyle}
            inputStyle={{ color: 'gray' }}
            returnKeyType="next"
            onChangeText={GuestLasttName => this.setState({ GuestLasttName })}
            errorStyle={{ color: 'red', alignSelf: 'center' }}
            errorMessage={this.state.NameError}
          />
          <Input
            placeholder="Email"
            keyboardType="email-address"
            ref={input => (this.Email = input)}
            onSubmitEditing={() => this.PhoneNumber.focus()}
            inputContainerStyle={styles.InputStyle}
            inputStyle={{ color: 'gray' }}
            returnKeyType="next"
            onChangeText={Email => this.setState({ Email })}
            errorStyle={{ color: 'red', alignSelf: 'center' }}
            errorMessage={this.state.NameError}
          />
          <Input
            placeholder="Phone Number"
            keyboardType="number-pad"
            ref={input => (this.PhoneNumber = input)}
            inputContainerStyle={styles.InputStyle}
            inputStyle={{ color: 'gray' }}
            returnKeyType="next"
            onChangeText={PhoneNumber => this.setState({ PhoneNumber })}
            errorStyle={{ color: 'red', alignSelf: 'center' }}
            errorMessage={this.state.NameError}
          />
        </View>
        <View style={styles.cardBottom}>
          <MonoText style={{ flex: 1, marginLeft: 20, fontSize: normalize(15) }}>
            SAR {this.state.price}
          </MonoText>
          <Button
            title="Continue"
            containerStyle={{ flex: 3 }}
            onPress={this.BookRoom}
            buttonStyle={{ maxHeight: 30 }}
          />
        </View>
      </View>
        : <CustomSpinner/>
    );
  }
}
