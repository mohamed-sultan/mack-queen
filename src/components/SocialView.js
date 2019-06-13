/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { View, Alert } from 'react-native';
import { Facebook } from 'expo';
import { Icon } from 'react-native-elements';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from '../Styles/AuthStyle';

export default class SocialView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      mailError: null,
      passError: null,
    };
    this.FacebooklogIn = this.FacebooklogIn.bind(this);
  }

  FacebooklogIn = async () => {
    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync('259474954987099', {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        this.props.navigation.navigate('Main');
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      Alert.alert(`Facebook Login Error: ${message}`);
    }
  };

  render() {
    return (
      <View style={styles.socialView}>
        <Icon
          type="font-awesome"
          name="facebook"
          color={this.props.Icolor}
          onPress={this.FacebooklogIn}
          size={35}
          iconStyle={{ paddingTop: 5 }}
          containerStyle={{
            height: 45,
            width: 45,
            borderRadius: 10,
            backgroundColor: [this.props.backgroundColor],
            marginVertical: 10,
            marginHorizontal: 20,
          }}
        />

        <Icon
          type="font-awesome"
          name="google"
          color={this.props.Icolor}
          size={35}
          iconStyle={{ paddingTop: 5 }}
          containerStyle={{
            height: 45,
            width: 45,
            borderRadius: 10,
            backgroundColor: [this.props.backgroundColor],
            marginVertical: 10,
            marginHorizontal: 20,
          }}
        />
      </View>
    );
  }
}
SocialView.propTypes = {
  Icolor: PropTypes.string.isRequired,
};
