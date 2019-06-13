/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Platform,
  I18nManager,
} from 'react-native';
import Expo from 'expo';
import { Image, Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import Languages from '../constants/Languages';

class drawerContentComponents extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  changeEnglish = async () => {
    if (I18nManager.isRTL) {
      I18nManager.forceRTL(false);
      I18nManager.allowRTL(false);
      Expo.Updates.reloadFromCache();
    }
  }

  changeArabic = async () => {
    if (I18nManager.isRTL === false) {
      I18nManager.forceRTL(true);
      I18nManager.allowRTL(true);
      Expo.Updates.reloadFromCache();
    }
  };

  render() {
    const { user } = this.props;
    console.log(user);
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <ImageBackground
            source={require('../assets/images/sideMenu.jpg')}
            style={{
              flex: 1,
              width: 280,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            imageStyle={{ resizeMode: 'stretch' }}
          >
            <Image style={styles.logoImage} source={require('../assets/images/profileMan.png')} />
            {user === {} ? (
             <Text style={{ color: '#FFF', fontSize: 17, marginTop: 5 }}>{this.props.user.name}</Text>
            ) : (
            <Button
              title={Languages.login}
              type="clear"
              titleStyle={{ color: '#FFF' }}
              onPress={() => this.props.navigation.navigate('SignIn')}
            />
            )}
          </ImageBackground>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            opacity: 0.2,
          }}
        />
        <View style={styles.screenContainer}>
          <TouchableOpacity style={styles.screenStyle} onPress={this.navigateToScreen('Main')}>
            <Icon
              name={Platform.OS === 'ios' ? 'ios-stats' : 'md-stats'}
              type="ionicon"
              color="#517fa4"
              containerStyle={{ marginRight: 20 }}
              size={20}
            />
            <Text>INVESTOR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.screenStyle} onPress={this.navigateToScreen('Wallet')}>
            <Icon
              name={Platform.OS === 'ios' ? 'ios-wallet' : 'md-wallet'}
              type="ionicon"
              color="#517fa4"
              containerStyle={{ marginRight: 20 }}
              size={20}
            />
            <Text>{Languages.wallet}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.screenStyle} onPress={this.navigateToScreen('Travel')}>
            <Icon
              name={Platform.OS === 'ios' ? 'ios-card' : 'md-card'}
              type="ionicon"
              color="#517fa4"
              containerStyle={{ marginRight: 20 }}
              size={20}
            />
            <Text>{Languages.travel}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.screenStyle} onPress={this.navigateToScreen('Profile')}>
            <Icon
              name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
              type="ionicon"
              color="#517fa4"
              containerStyle={{ marginRight: 20 }}
              size={20}
            />
            <Text>{Languages.profile}</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            opacity: 0.2,
          }}
        />
        <View style={styles.screenContainer}>
          <TouchableOpacity style={styles.screenStyle} onPress={this.changeEnglish}>
            <Text>English</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.screenStyle} onPress={this.changeArabic}>
            <Text>{'Arabic(عربى)'}</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            opacity: 0.2,
          }}
        />
        <View style={styles.screenContainer}>
          <TouchableOpacity style={styles.screenStyle} onPress={this.navigateToScreen('About')}>
            <Icon
              size={20}
              name={Platform.OS === 'ios' ? 'ios-information-circle' : 'md-information-circle'}
              type="ionicon"
              color="#517fa4"
              containerStyle={{ marginRight: 20 }}
            />
            <Text>{Languages.aboutus}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.screenStyle} onPress={this.navigateToScreen('Terms')}>
            <Icon
              size={20}
              name={Platform.OS === 'ios' ? 'ios-document' : 'md-document'}
              type="ionicon"
              color="#517fa4"
              containerStyle={{ marginRight: 20 }}
            />

            <Text>{Languages.terms}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.screenStyle} onPress={this.navigateToScreen('Privacy')}>
            <Icon
              size={20}
              name={Platform.OS === 'ios' ? 'ios-lock' : 'md-lock'}
              type="ionicon"
              color="#517fa4"
              containerStyle={{ marginRight: 20 }}
            />

            <Text>{Languages.privacy}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.screenStyle} onPress={this.navigateToScreen('ContactUs')}>
            <Icon
              size={20}
              name={Platform.OS === 'ios' ? 'ios-chatboxes' : 'md-chatboxes'}
              type="ionicon"
              color="#517fa4"
              containerStyle={{ marginRight: 20 }}
            />

            <Text>{Languages.contactus}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.screenStyle} onPress={this.navigateToScreen('ContactUs')}>
            <Icon
              size={20}
              name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'}
              type="ionicon"
              color="#517fa4"
              containerStyle={{ marginRight: 20 }}
            />

            <Text>{Languages.rateus}</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            opacity: 0.2,
          }}
        />
        <Text style={{ margin: 10, fontSize: 15, fontFamily: 'Roboto-Medium' }}>MacQueen</Text>
        <Text style={{ fontFamily: 'Roboto-Medium', marginHorizontal: 20 }}>Version: 1.0.0 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
  },
  headerContainer: {
    height: 200,
  },
  headerText: {
    color: '#fff8f8',
  },
  screenContainer: {
    padding: 20,
  },
  screenStyle: {
    height: 40,
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  screenTextStyle: {
    fontSize: 20,
    marginLeft: 20,
  },
  logoImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
});
const mapStateToProps = state => ({
  user: state.user || {},
});
export default connect(mapStateToProps)(drawerContentComponents);
