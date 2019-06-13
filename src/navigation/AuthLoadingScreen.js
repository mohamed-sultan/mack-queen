/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  ActivityIndicator, StatusBar, StyleSheet, View,
} from 'react-native';
import { connect } from 'react-redux';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const { token } = this.props.user;
    this.props.navigation.navigate(token ? 'Main' : 'Auth');
  };

  render() {
    return (
      // eslint-disable-next-line no-use-before-define
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
const mapStateToProps = state => ({
  user: state.user || {},
});
export default connect(mapStateToProps)(AuthLoadingScreen);
