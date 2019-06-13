/* eslint-disable class-methods-use-this */
/* eslint-disable no-use-before-define */
import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import { RippleLoader } from 'react-native-indicator';

class CustomSpinner extends React.Component {
  render() {
    return (
            <View style={styles.container}>
                <RippleLoader
                color='#FF4B68'
                size={60} />
            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: Platform.OS === 'ios' ? 15 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default CustomSpinner;
