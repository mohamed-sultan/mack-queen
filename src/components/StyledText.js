/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Text } from 'react-native';

export class MonoText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'Roboto-Medium' }]} />;
  }
}
