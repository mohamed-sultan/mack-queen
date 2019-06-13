/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable class-methods-use-this */
import React from 'react';
import {
  StyleSheet, View, Dimensions, TouchableOpacity,
} from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
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
  AdultCard: {
    backgroundColor: '#FFF',
    width: Dwidth - 20,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    shadowColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
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

export default class TravellerDetails extends React.Component {
  static navigationOptions = {
    title: 'Traveller details',
  };

  constructor(props) {
    super(props);
    this.state = {
      FirstName: '',
      Email: '',
      PhoneNumber: '',
      LastName: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View elevation={3} style={styles.card}>
          <MonoText style={{ fontSize: 17, marginBottom: 5 }}>Welcome</MonoText>
          <MonoText>mmelek@gmail.com</MonoText>
        </View>
        <MonoText style={{ fontSize: 17, margin: 15, alignSelf: 'flex-start' }}>
          Who is travelling?*
        </MonoText>
        <TouchableOpacity
          style={styles.AdultCard}
          onPress={() => this.props.navigation.navigate('AdultData')}
        >
          <Icon
            name="user"
            type="font-awesome"
            size={20}
            color="black"
            containerStyle={{ marginHorizontal: 10 }}
          />
          <MonoText>Adult</MonoText>
          <Icon
            name="chevron-right"
            type="font-awesome"
            size={20}
            color="black"
            containerStyle={{ position: 'absolute', right: 10 }}
          />
        </TouchableOpacity>
        <MonoText style={{ fontSize: 17, margin: 15, alignSelf: 'flex-start' }}>
          Contact details*
        </MonoText>
        <View elevation={3} style={styles.InputCard}>
          <Input
            placeholder="FirstName"
            keyboardType="default"
            inputContainerStyle={styles.InputStyle}
            inputStyle={{ color: 'gray' }}
            returnKeyType="next"
            onChangeText={FirstName => this.setState({ FirstName })}
            errorStyle={{ color: 'red', alignSelf: 'center' }}
            errorMessage={this.state.NameError}
          />
          <Input
            placeholder="Last Name"
            keyboardType="default"
            inputContainerStyle={styles.InputStyle}
            inputStyle={{ color: 'gray' }}
            returnKeyType="next"
            onChangeText={LastName => this.setState({ LastName })}
            errorStyle={{ color: 'red', alignSelf: 'center' }}
            errorMessage={this.state.NameError}
          />
          <Input
            placeholder="Email"
            keyboardType="email-address"
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
            SAR 3,109
          </MonoText>
          <Button
            title="Continue"
            containerStyle={{ flex: 3 }}
            onPress={() => this.props.navigation.navigate('Investor')}
            buttonStyle={{ maxHeight: 30 }}
          />
        </View>
      </View>
    );
  }
}
