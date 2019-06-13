/* eslint-disable eqeqeq */
/* eslint-disable linebreak-style */
/* eslint-disable no-return-assign */
/* eslint-disable no-shadow */
/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  View, ImageBackground, StatusBar, Alert, TouchableOpacity, AsyncStorage, ScrollView,
} from 'react-native';
import {
  Input, Button, Icon,
} from 'react-native-elements';
import { connect } from 'react-redux';
import { getUser } from '../../redux/actions/user';
import styles from '../../Styles/AuthStyle';
import { MonoText } from '../../components/StyledText';
import { FormIcon } from '../../components/FormIcon';
import ImageLogo from '../../components/ImageLogo';
import Languages from '../../constants/Languages';
import LoginService from './LoginService';
import CustomSpinner from '../../constants/SpinKit';
import { verticalScale } from '../../Helpers/Scaling';

class SignIn extends React.Component {
  static navigationOptions = {
    headerVisible: false,
    headerMode: 'none',
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      mailError: null,
      passError: null,
      loading: false,
    };
    this.loginUser = this.loginUser.bind(this);
  }

  loginUser = async () => {
    if (this.state.email && this.state.password) {
      this.setState({
        loading: true,
      });
      const response = await LoginService.login(this.state)
        .catch(() => {
          this.setState({
            loading: false,
          });
          Alert.alert(
            'LOGIN_ERROR',
            'Network error',
          );
        });
      if (response.data.status == '200') {
        const { email, name } = this.state;
        const user = {
          email,
          name,
          token: response.data.access_token,
        };
        AsyncStorage.setItem('USER_LOGIN_INFO', JSON.stringify(user || {}));
        AsyncStorage.getItem('USER_LOGIN_INFO', (err, result) => {
          this.props.onLogin(result);
        });
        await this.setState({ loading: false });
        this.props.navigation.navigate('Investor');
      } else {
        const { email, password } = response.data.errors;
        if (email) {
          this.setState({ mailError: email[0] });
        } else {
          this.setState({ mailError: '' });
        }
        if (password) {
          this.setState({ passError: password[0] });
        } else if (response.data.Result.message) {
          this.setState({ passError: response.data.Result.message });
        } else {
          this.setState({ passError: '' });
        }
        await this.setState({ loading: false });
      }
    } else {
      Alert.alert(
        'LOGIN_ERROR',
        'all Fields must not be empty',
      );
    }
  };

  render() {
    StatusBar.setHidden(true, 'fade');
    return (
      <ImageBackground
        style={styles.background}
        source={require('../../assets/images/background.png')}
        imageStyle={{ resizeMode: 'stretch' }}
      >
        <Icon
          name="backburger"
          type="material-community"
          color="#f50"
          size={25}
          onPress={() => this.props.navigation.navigate('Investor')}
          containerStyle={{ position: 'absolute', left: 30, top: 30 }}
        />
      {!this.state.loading
        ? <ScrollView style={{ flex: 1, paddingTop: verticalScale(110) }}>
        <View style={styles.container}>
          <ImageLogo style={styles.logoImage} source={require('../../assets/images/Logo.png')} />
          <Input
            placeholder={Languages.enterEmail}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            onSubmitEditing={() => this.password.focus()}
            returnKeyType="next"
            keyboardType="email-address"
            leftIcon={<FormIcon iname={'envelope'} />}
            inputContainerStyle={styles.InputStyle}
            containerStyle={{ paddingVertical: 5 }}
            errorStyle={{ color: 'red' }}
            errorMessage={this.state.mailError}
          />
          <Input
            placeholder={Languages.enterPassword}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            ref={input => (this.password = input)}
            returnKeyType="done"
            onSubmitEditing={this.loginUser}
            leftIcon={<FormIcon iname={'unlock-alt'} />}
            inputContainerStyle={styles.InputStyle}
            secureTextEntry={true}
            autoCorrect={false}
            containerStyle={{ paddingVertical: 5, paddingBottom: 15 }}
            errorStyle={{ color: 'red' }}
            errorMessage={this.state.passError}
          />
          <TouchableOpacity style={styles.button} onPress={this.loginUser}>
            <MonoText style={styles.buttonText}>{Languages.login}</MonoText>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', padding: 10 }}>
            <Button
              title={Languages.forgotPassword}
              type="clear"
              titleStyle={styles.checkboxText}
              onPress={() => this.props.navigation.navigate('ForgetPassword')}
            />
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: verticalScale(70),
          }}
        >
          <MonoText style={{ color: 'white', fontSize: 19 }}>{Languages.haveAccount}</MonoText>
          <Button
            title={Languages.signup}
            type="clear"
            titleStyle={{ fontSize: 19, color: '#fbb039', fontFamily: 'Roboto-Medium' }}
            onPress={() => this.props.navigation.navigate('SignUp')}
          />
        </View>
        </ScrollView>
        : <CustomSpinner/>
    }
      </ImageBackground>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  onLogin: (user) => {
    dispatch(getUser(user));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
