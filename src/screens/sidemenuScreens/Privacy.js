/* eslint-disable react/prop-types */
import React from 'react';
import { View, Button } from 'react-native';

export default class PrivacyScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Privacy',
    title: 'Privacy',
    headerTitleStyle: {
      fontFamily: 'Roboto-Medium',
      alignSelf: 'center',
    },
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <Button
          title="Privacy"
          type="clear"
          titleStyle={{}}
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    );
  }
}
