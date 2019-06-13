/* eslint-disable camelcase */
/* eslint-disable no-return-assign */
/* eslint-disable global-require */
/* eslint-disable no-shadow */
/* eslint-disable eqeqeq */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  StatusBar,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import { Input } from 'react-native-elements';
import axios from 'axios';

//
import styles from '../../Styles/AuthStyle';
import { FormIcon } from '../../components/FormIcon';
import { MonoText } from '../../components/StyledText';
import ImageLogo from '../../components/ImageLogo';
import Languages from '../../constants/Languages';
import CustomSpinner from '../../constants/SpinKit';
import { verticalScale } from '../../Helpers/Scaling';

export default class SignUp extends React.Component {
  static navigationOptions = {
    title: Languages.signup,
    headerStyle: {
      backgroundColor: '#f4f7f8',
    },
    headerTitleStyle: {
      fontFamily: 'Roboto-Medium',
      alignSelf: 'center',
    },
  };

  constructor() {
    super();
    this.state = {
      fullName: '',
      email: '',
      password: '',
      NameError: '',
      confirmPassword: '',
      passError: '',
      mailError: '',
      loading: false,
    };
    this.registerUser = this.registerUser.bind(this);
  }

  registerUser = async () => {
    await this.setState({ loading: true });
    const {
      fullName, email, password, confirmPassword,
    } = this.state;
    const { navigation } = this.props;
    const Formdata = JSON.stringify({
      first_name: fullName,
      last_name: fullName,
      email,
      password,
      confirm_password: confirmPassword,
    });
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    };
    const response = await axios
      .post(
        'http://macqueen.bsamat.com/api/v1/register',
        Formdata,
        axiosConfig,
        // eslint-disable-next-line no-unused-vars
      )
      // eslint-disable-next-line no-unused-vars
      .catch((e) => {
        this.setState({ loading: false });
        Alert.alert('Failed', 'check you conection', [{ text: 'Cancel', style: 'cancel' }]);
      });
    this.setState({ loading: false });
    if (response.data.status == '200') {
      await this.setState({ loading: false });
      Alert.alert(
        'Success',
        'Account Created succefuly',
        [
          {
            text: 'Login',
            onPress: () => navigation.navigate('SignIn'),
          },
        ],
        { cancelable: false },
      );
    } else {
      const { email, first_name, password } = response.data.errors;
      if (email) {
        this.setState({ mailError: email[0] });
      } else {
        this.setState({ mailError: '' });
      }
      if (first_name) {
        this.setState({ NameError: first_name[0] });
      } else {
        this.setState({ NameError: '' });
      }
      if (password) {
        this.setState({ passError: password[0] });
      } else {
        this.setState({ passError: '' });
      }
      await this.setState({ loading: false });
    }
  };

  render() {
    StatusBar.setHidden(true, 'fade');
    return (
      <ImageBackground
        style={styles.background}
        source={require('../../assets/images/signup.png')}
        imageStyle={{ resizeMode: 'stretch' }}
      >
            {!this.state.loading
              ? <ScrollView style={{ flex: 1, paddingTop: verticalScale(110) }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            style={styles.container}
            bahvior="padding"
            keyboardVerticalOffset={80}
            >
            <ImageLogo style={styles.imageStyle} source={require('../../assets/images/Logo.png')} />
            <Input
              placeholder={Languages.enterName}
              returnKeyType="next"
              value={this.state.fullName}
              onChangeText={fullName => this.setState({ fullName })}
              leftIcon={<FormIcon iname={'user'} />}
              onSubmitEditing={() => this.email.focus()}
              keyboardType="default"
              inputContainerStyle={styles.InputStyle}
              containerStyle={{ paddingVertical: 5 }}
              errorMessage={this.state.NameError}
            />
            <Input
              placeholder={Languages.enterEmail}
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              onSubmitEditing={() => this.password.focus()}
              ref={input => (this.email = input)}
              returnKeyType="next"
              leftIcon={<FormIcon iname={'envelope'} />}
              keyboardType="email-address"
              inputContainerStyle={styles.InputStyle}
              containerStyle={{ paddingVertical: 5 }}
              errorStyle={{ color: 'red' }}
              errorMessage={this.state.mailError}
            />
            <Input
              placeholder={Languages.enterPassword}
              value={this.state.password}
              onSubmitEditing={() => this.confirmPassword.focus()}
              onChangeText={password => this.setState({ password })}
              ref={input => (this.password = input)}
              returnKeyType="next"
              leftIcon={<FormIcon iname={'unlock-alt'} />}
              secureTextEntry={true}
              autoCorrect={false}
              inputContainerStyle={styles.InputStyle}
              containerStyle={{ paddingVertical: 5 }}
              errorStyle={{ color: 'red' }}
              errorMessage={this.state.passError}
            />
            <Input
              placeholder={Languages.confirmPassword}
              value={this.state.confirmPassword}
              onChangeText={confirmPassword => this.setState({ confirmPassword })}
              leftIcon={<FormIcon iname={'unlock-alt'} />}
              onSubmitEditing={this.registerUser}
              ref={input => (this.confirmPassword = input)}
              returnKeyType="done"
              secureTextEntry={true}
              autoCorrect={false}
              inputContainerStyle={styles.InputStyle}
              containerStyle={{ paddingVertical: 5, paddingBottom: 10 }}
              errorStyle={{ color: 'red' }}
              errorMessage={this.state.passError}
            />
            <TouchableOpacity style={styles.button2} onPress={this.registerUser}>
              <MonoText style={styles.buttonText}>{Languages.signup}</MonoText>
            </TouchableOpacity>
            <View style={{ height: 50 }} />
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        </ScrollView>
              : <CustomSpinner/>
    }
      </ImageBackground>
    );
  }
}
