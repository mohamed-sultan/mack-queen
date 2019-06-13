/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { connect } from 'react-redux';
import RoomDetails from './RoomDetails';
import HotelDetails from './HotelDetails';
import Colors from '../../constants/Colors';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};
const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  tabbar: {
    backgroundColor: '#0099ca',
  },
  tab: {
    width: Dimensions.get('window').width / 2,
  },
  indicator: {
    backgroundColor: Colors.Orange,
  },
  label: {
    color: '#FFF',
    fontWeight: '400',
  },
});

class AvailbleRooms extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name,
  });

  state = {
    index: 0,
    data: {},
    routes: [
      { key: 'RoomDetails', title: 'Room Details', navigation: this.props.navigation },
      { key: 'HotelDetails', title: 'Hotel Details', navigation: this.props.navigation },
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
    RoomDetails,
    HotelDetails,
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
const mapStateToProps = state => ({
  hotel: state.hotel || {},
});
export default connect(mapStateToProps)(AvailbleRooms);
