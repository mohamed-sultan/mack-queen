/* eslint-disable react/prop-types */
import React from 'react';
import { View, Button } from 'react-native';

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'About',
    title: 'About',
    headerTitleStyle: {
      fontFamily: 'Roboto-Medium',
      alignSelf: 'center',
    },
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <Button
          title="About us"
          type="clear"
          titleStyle={{}}
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    );
  }
}
