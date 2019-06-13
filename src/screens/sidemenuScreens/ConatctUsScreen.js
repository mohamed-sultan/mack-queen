/* eslint-disable global-require */
/* eslint-disable react/prop-types */
/* eslint-disable no-return-assign */
import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Alert,
} from 'react-native';
import { Icon } from 'react-native-elements';
import axios from 'axios';
import { MonoText } from '../../components/StyledText';
import { scale, verticalScale } from '../../Helpers';
import Colors from '../../constants/Colors';
import Card from '../../components/ContactUsCard';
import CustomSpinner from '../../constants/SpinKit';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#f4f7f8',
  },
  topText: {
    color: Colors.Orange,
    fontSize: 15,
    padding: 10,
  },
  InputStyle: {
    borderWidth: 0,
    borderRadius: 30,
    borderColor: 'white',
    backgroundColor: 'white',
    width: '80%',
    alignSelf: 'center',
  },
  InputContainer: {
    backgroundColor: '#FFF',
    alignSelf: 'center',
    width: scale(280),
    borderWidth: 0,
    borderRadius: 30,
    padding: 5,
    marginVertical: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  button: {
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fbb039',
    width: scale(280),
    height: verticalScale(35),
    // marginVertical: 20,
    alignSelf: 'center',
  },
  lottie: {
    width: 150,
    height: 150,
  },
});

export default class ConatctUsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Contact Us',
    title: 'Contact Us',
    headerTitleStyle: {
      fontFamily: 'Roboto-Medium',
      alignSelf: 'center',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      FullName: '',
      Email: '',
      Number: '',
      Message: '',
      mailError: '',
      NameError: '',
      NumberError: '',
      MessageError: '',
      loading: false,
    };
    this.Send = this.Send.bind(this);
  }

  Send = async () => {
    await this.setState({ loading: true });
    const {
      FullName, Email, Number, Message,
    } = this.state;
    const { navigation } = this.props;
    const Formdata = JSON.stringify({
      name: FullName,
      email: Email,
      mobile: Number,
      message: Message,
    });
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    };
    const response = await axios
      .post('http://bsamat.com/demo/macqueen/public/api/contact_us', Formdata, axiosConfig)
      // eslint-disable-next-line no-unused-vars
      .catch((e) => {
        Alert.alert('Failed', 'check you conection', [{ text: 'Cancel', style: 'cancel' }]);
        this.setState({ loading: false });
      });

    // eslint-disable-next-line eqeqeq
    if (response.data.Result.status_code == '200') {
      await this.setState({ loading: false });
      Alert.alert(
        'Success',
        'Your message send to our team',
        [
          {
            text: 'Back to Main',
            onPress: () => navigation.navigate('Main'),
          },
        ],
        { cancelable: false },
      );
    } else {
      const {
        email, name, message, mobile,
      } = response.data.Result.message;
      if (email) {
        this.setState({ mailError: email[0] });
      } else {
        this.setState({ mailError: '' });
      }
      if (name) {
        this.setState({ NameError: name[0] });
      } else {
        this.setState({ NameError: '' });
      }
      if (mobile) {
        this.setState({ NumberError: mobile[0] });
      } else {
        this.setState({ NumberError: '' });
      }
      if (message) {
        this.setState({ MessageError: message[0] });
      } else {
        this.setState({ MessageError: '' });
      }
      await this.setState({ loading: false });
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={70} style={{ flex: 1 }}>
           {!this.state.loading
             ? <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <MonoText style={styles.topText}>Call Us We are Available 24/7</MonoText>
              <Card title="General Inquiries" />
              <Card title="Reservation and Cancelation" />
              <Card title="Tourist Packages and Coporate Bookings" />
              <Card title="If you are a hotel owner and would like to add your hotel to be listed in our app" />
              <Card title="For tourist agancies" />
              <View
                style={{ alignSelf: 'center', flexDirection: 'row', backgroundColor: '#f4f7f8' }}
              >
                <Icon name="sc-telegram" type="evilicon" color="#517fa4" size={22} />
                <MonoText style={{ color: Colors.Orange, fontSize: 21 }}>Contact Us</MonoText>
              </View>
              <View
                style={{
                  backgroundColor: '#f4f7f8',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}
              >
                <View style={styles.InputContainer} elevation={3}>
                  <TextInput
                    placeholder="Full Name"
                    onChangeText={FullName => this.setState({ FullName })}
                    returnKeyType="next"
                    keyboardType="default"
                    onSubmitEditing={() => this.Email.focus()}
                    style={{ marginLeft: 15, alignItems: 'center' }}
                    textContentType="username"
                  />
                </View>
                <MonoText style={{ color: 'red' }}>{this.state.NameError}</MonoText>
                <View style={styles.InputContainer} elevation={3}>
                  <TextInput
                    placeholder="Email"
                    onChangeText={Email => this.setState({ Email })}
                    returnKeyType="next"
                    keyboardType="email-address"
                    onSubmitEditing={() => this.Number.focus()}
                    style={{ marginLeft: 15, alignItems: 'center' }}
                    ref={input => (this.Email = input)}
                    textContentType="emailAddress"
                  />
                </View>
                <MonoText style={{ color: 'red' }}>{this.state.mailError}</MonoText>
                <View style={styles.InputContainer} elevation={3}>
                  <TextInput
                    placeholder="Phone Number (05xxxxxxxx)"
                    onChangeText={Number => this.setState({ Number })}
                    returnKeyType="next"
                    keyboardType="number-pad"
                    onSubmitEditing={() => this.Message.focus()}
                    ref={input => (this.Number = input)}
                    style={{ marginLeft: 15, alignItems: 'center' }}
                    textContentType="telephoneNumber"
                  />
                </View>
                <MonoText style={{ color: 'red' }}>{this.state.NumberError}</MonoText>
                <View style={styles.InputContainer} elevation={3}>
                  <TextInput
                    placeholder="Your message"
                    onChangeText={Message => this.setState({ Message })}
                    returnKeyType="next"
                    keyboardType="default"
                    ref={input => (this.Message = input)}
                    style={{ marginLeft: 15, alignItems: 'center' }}
                    multiline
                    maxLength={150}
                  />
                </View>
                <MonoText style={{ color: 'red' }}>{this.state.MessageError}</MonoText>

                <TouchableOpacity style={styles.button} onPress={this.Send}>
                  <MonoText style={{ color: '#FFF', fontSize: 19 }}>Send</MonoText>
                </TouchableOpacity>
                <View style={{ height: 50 }} />
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
             : <CustomSpinner/>
        }
      </KeyboardAvoidingView>
    );
  }
}
