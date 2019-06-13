/* eslint-disable class-methods-use-this */
import React from 'react';
import { ScrollView, StyleSheet, Platform } from 'react-native';
import { Icon } from 'react-native-elements';

import { ExpoLinksView } from '@expo/samples';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
export default class WalletScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'WALLET',
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
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
         * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
      </ScrollView>
    );
  }
}
