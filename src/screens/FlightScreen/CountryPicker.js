/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React from 'react';

import CountryCodeList from 'react-native-country-code-list';

export default class CountryCodeListApp extends React.Component {
  static navigationOptions = {
    title: 'Search Country',
  };

  goback = (data) => {
    const { navigation } = this.props;
    navigation.goBack();
    navigation.state.params.updateData(data);
  };

  render() {
    return <CountryCodeList onClickCell={cellObject => this.goback(cellObject.name)} />;
  }
}
