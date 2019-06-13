/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text } from 'react-native';
import { MonoText } from './StyledText';

export default class Card extends React.Component {
  render() {
    return (
      <View
        style={{
          padding: 10,
          backgroundColor: '#f4f7f8',
          borderBottomColor: 'gray',
          borderBottomWidth: 0.5,
        }}
      >
        <MonoText style={{ fontSize: 13 }}>{this.props.title}</MonoText>
        <Text>info@macqueen.com </Text>
      </View>
    );
  }
}
