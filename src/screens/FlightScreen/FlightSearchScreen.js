/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import OneWayFlight from './OneWay/OneWayFlight';
import RoundTrip from './RoundTrip/RoundTrip';
import MultiCity from './MultiCity/MultiCity';
import Colors from '../../constants/Colors';
import Languages from '../../constants/Languages';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class FlightSearchScreen extends React.Component {
  static navigationOptions = {
    title: Languages.flight,
  };

  state = {
    index: 1,
    routes: [
      { key: 'OneWayFlight', title: Languages.OneWay, navigation: this.props.navigation },
      { key: 'RoundTrip', title: Languages.roundtrip, navigation: this.props.navigation },
      { key: 'MultiCity', title: Languages.multiCity, navigation: this.props.navigation },
    ],
  };

  handleIndexChange = index => this.setState({
    index,
  });

  renderTabBar = props => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      tabStyle={styles.tab}
      labelStyle={styles.label}
    />
  );

  renderScene = SceneMap({
    OneWayFlight,
    RoundTrip,
    MultiCity,
  });

  render() {
    return (
      <TabView
        style={[styles.container, this.props.style]}
        navigationState={this.state}
        renderScene={this.renderScene}
        renderTabBar={this.renderTabBar}
        onIndexChange={this.handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: '#0099ca',
  },
  tab: {
    width: Dimensions.get('window').width / 3,
  },
  indicator: {
    backgroundColor: Colors.Orange,
  },
  label: {
    color: '#FFF',
    fontWeight: '400',
  },
});
