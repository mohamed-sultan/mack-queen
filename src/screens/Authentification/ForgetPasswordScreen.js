/* eslint-disable react/prop-types */
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon, Button, Input } from 'react-native-elements';
import colors from '../../constants/Colors';
import { FormIcon } from '../../components/FormIcon';
import styles from '../../Styles/AuthStyle';

export default class ForgetPasswordScreen extends React.Component {
  static navigationOptions = {
    title: 'Forget password',
    headerStyle: {
      backgroundColor: '#f4f7f8',
    },
    headerTitleStyle: {
      fontFamily: 'Roboto-Medium',
      alignSelf: 'center',
    },
  };

  state = {
    email: '',
    errorMessage: null,
    isLoading: false,
  };

  handleSubmit = async () => {
    const { navigate } = this.props.navigation;
    try {
      navigate('SignIn');
    } catch (e) {
      this.setState({ errorMessage: e, isLoading: false });
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {this.state.errorMessage && <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>}

        <Input
          placeholder="Email Address"
          onChangeText={email => this.setState({ email })}
          leftIcon={<FormIcon iname={'envelope'} />}
          inputContainerStyle={styles.InputStyle}
          containerStyle={{ paddingVertical: 5 }}
          errorStyle={{ color: 'red' }}
          errorMessage={this.state.mailError}
        />

        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={() => this.props.navigation.navigate('SignIn')}
        >
          <Text
            style={{
              fontFamily: 'Roboto-Medium',
              color: colors.base,
              fontSize: 20,
              marginHorizontal: 10,
            }}
          >
            Go back to login page
          </Text>
          <Icon size={20} name="info-circle" type="font-awesome" color={colors.base} />
        </TouchableOpacity>
        <View style={{ width: '90%', paddingTop: 50 }}>
          <Button
            rounded
            onPress={this.handleSubmit}
            title="Send password resetting"
            backgroundColor={colors.base}
          />
        </View>
      </View>
    );
  }
}
