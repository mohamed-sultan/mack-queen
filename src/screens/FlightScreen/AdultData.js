/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable class-methods-use-this */
import React from 'react';
import {
  StyleSheet, View, Dimensions, TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux';
import { Input, Button, Icon } from 'react-native-elements';
import { updateAdult } from '../../redux/actions/user';

import { MonoText } from '../../components/StyledText';
import { normalize } from '../../constants/Font';

const Dwidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  info: {
    flexDirection: 'row',
    borderWidth: 0.3,
    alignItems: 'center',
    height: 40,
    margin: 10,
    width: Dwidth - 30,
  },
  InputStyle: {
    borderBottomWidth: 0.2,
    borderColor: 'gray',
    backgroundColor: 'white',
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

class AdultData extends React.Component {
  static navigationOptions = {
    title: 'Traveller details',
  };

  constructor(props) {
    super(props);
    this.state = {
      FirstName: this.props.adult.FirstName || '',
      midName: this.props.adult.midName || '',
      LastName: this.props.adult.LastName || '',
      DateOfBirth: this.props.adult.DateOfBirth || '',
      passexpiry: this.props.adult.passexpiry || '',
      PassNumber: this.props.adult.PassNumber || '',
      Nationality: this.props.adult.Nationality || 'Nationality',
    };
    this.SaveData = this.SaveData.bind(this);
  }

  updateData = async (data) => {
    await this.setState({ Nationality: data });
  };

  handelPress = () => {
    this.props.navigation.navigate('CountryCodeList', {
      updateData: this.updateData,
    });
  };

  SaveData = async () => {
    await this.props.SaveAdult(this.state);
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Icon
            name="info-circle"
            type="font-awesome"
            size={20}
            color="blue"
            containerStyle={{ marginHorizontal: 10 }}
          />
          <MonoText>Please make sure the information matches the government</MonoText>
        </View>
        <MonoText style={{ fontSize: 17, margin: 15, alignSelf: 'flex-start' }}>
          Adult details*
        </MonoText>
        <View elevation={3} style={styles.InputCard}>
          <Input
            placeholder="FirstName"
            keyboardType="default"
            value={this.state.FirstName}
            inputContainerStyle={styles.InputStyle}
            inputStyle={{ color: 'gray' }}
            returnKeyType="next"
            onChangeText={FirstName => this.setState({ FirstName })}
            errorStyle={{ color: 'red', alignSelf: 'center' }}
            errorMessage={this.state.NameError}
          />
          <Input
            placeholder="Middle Name"
            keyboardType="default"
            inputContainerStyle={styles.InputStyle}
            inputStyle={{ color: 'gray' }}
            returnKeyType="next"
            value={this.state.FirstName}
            onChangeText={midName => this.setState({ midName })}
            errorStyle={{ color: 'red', alignSelf: 'center' }}
            errorMessage={this.state.NameError}
          />
          <Input
            placeholder="Last Name"
            keyboardType="default"
            inputContainerStyle={styles.InputStyle}
            inputStyle={{ color: 'gray' }}
            returnKeyType="next"
            value={this.state.FirstName}
            onChangeText={LastName => this.setState({ LastName })}
            errorStyle={{ color: 'red', alignSelf: 'center' }}
            errorMessage={this.state.NameError}
          />
          <DatePicker
            mode="date"
            placeholder="Date of Birth"
            date={this.state.DateOfBirth}
            format="DD-MM-YYYY"
            minDate="01-01-1920"
            maxDate="30-11-2019"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            customStyles={{
              dateInput: {
                backgroundColor: '#FFF',
                borderWidth: 0,
                height: 20,
                alignItems: 'flex-start',
                marginLeft: 8,
                borderBottomWidth: 0.3,
              },
            }}
            onDateChange={(DateOfBirth) => {
              this.setState({ DateOfBirth });
            }}
          />
          <TouchableOpacity onPress={this.handelPress}>
            <MonoText
              style={{
                color: 'gray',
                marginLeft: 9,
                opacity: 0.5,
                fontSize: 16,
              }}
            >
              {this.state.Nationality}
            </MonoText>
          </TouchableOpacity>
          <Input
            placeholder="Password Number"
            keyboardType="number-pad"
            inputContainerStyle={styles.InputStyle}
            inputStyle={{ color: 'gray' }}
            returnKeyType="next"
            value={this.state.FirstName}
            onChangeText={PassNumber => this.setState({ PassNumber })}
            errorStyle={{ color: 'red', alignSelf: 'center' }}
            errorMessage={this.state.NameError}
          />
          <DatePicker
            style={{
              width: 150,
              height: 40,
              justifyContent: 'flex-start',
            }}
            date={this.state.passexpiry}
            mode="date"
            placeholder="Password expiry date"
            format="DD-MM-YYYY"
            minDate="01-01-1920"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            customStyles={{
              dateInput: {
                backgroundColor: '#FFF',
                borderWidth: 0,
                height: 20,
                alignItems: 'flex-start',
                marginLeft: 8,
                borderBottomWidth: 0.3,
              },
            }}
            onDateChange={(passexpiry) => {
              this.setState({ passexpiry });
            }}
          />
        </View>
        <View style={styles.cardBottom}>
          <MonoText style={{ flex: 1, marginLeft: 20, fontSize: normalize(15) }}>
            SAR 3,109
          </MonoText>
          <Button
            title="Save Data"
            containerStyle={{ flex: 3 }}
            onPress={this.SaveData}
            buttonStyle={{ maxHeight: 30 }}
          />
        </View>
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  SaveAdult: (adult) => {
    dispatch(updateAdult(adult));
  },
});
const mapStateToProps = state => ({
  adult: state.adult || {},
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdultData);
