/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React from 'react';
import { Platform } from 'react-native';

import { ExpoConfigView } from '@expo/samples';
import { Icon } from 'react-native-elements';

export default class TravelCardScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'TRAVEL',
    headerLeft: (
      <Icon
        name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
        type="ionicon"
        color="#FFF"
        containerStyle={{ marginHorizontal: 30 }}
        size={25}
        onPress={() => navigation.openDrawer()}
      />
    ),
  });

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
