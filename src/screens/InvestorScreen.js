/* eslint-disable class-methods-use-this */
/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Image, ImageBackground, TouchableOpacity, View, StatusBar,
} from 'react-native';
import { DrawerActions } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { MonoText } from '../components/StyledText';
import ImageLogo from '../components/ImageLogo';
import styles from '../Styles/HomeStyle';
import { normalize } from '../constants/Font';
import Languages from '../constants/Languages';

export default class InvestorScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    StatusBar.setHidden(false, 'fade');
    return (
      <ImageBackground style={styles.container} source={require('../assets/images/backone.jpg')}>
        <View style={styles.logoContainer}>
          <Icon
            name="bars"
            type="font-awesome"
            color="white"
            size={22}
            onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
            containerStyle={{ margin: 20, paddingTop: 5 }}
          />
          <ImageLogo style={styles.logoImage} source={require('../assets/images/whiteLogo.png')} />
        </View>

        <View style={styles.NavStyle}>
          <TouchableOpacity
            style={styles.cardStyle}
            onPress={() => this.props.navigation.navigate('Input')}
          >
            <Image
              style={{ height: 60, width: 65 }}
              source={require('../assets/icons/package.png')}
              resizeMode="contain"
            />
            <MonoText style={{ marginTop: 7, fontSize: normalize(13), color: 'white' }}>
              {Languages.packages}
            </MonoText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardStyle}
            onPress={() => this.props.navigation.navigate('HotelForm')}
          >
            <Image
              style={{ height: 40, width: 40 }}
              source={require('../assets/icons/hotels.png')}
              resizeMode="contain"
            />

            <MonoText style={{ marginTop: 7, fontSize: normalize(13), color: 'white' }}>
            {Languages.hotel}
            </MonoText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardStyle}
            onPress={() => this.props.navigation.navigate('Input')}
          >
            <Image
              style={{ height: 40, width: 40 }}
              source={require('../assets/icons/homes.png')}
              resizeMode="contain"
            />
            <MonoText style={{ marginTop: 7, fontSize: normalize(13), color: 'white' }}>
            {Languages.homes}
            </MonoText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardStyle}
            onPress={() => this.props.navigation.navigate('FlightSearch')}
          >
            <Image
              style={{ height: 40, width: 40 }}
              source={require('../assets/icons/flight.png')}
              resizeMode="contain"
            />
            <MonoText style={{ marginTop: 7, fontSize: normalize(13), color: 'white' }}>
            {Languages.flight}
            </MonoText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardStyle}
            onPress={() => this.props.navigation.navigate('TransportationForm')}
          >
            <Image
              style={{ height: 40, width: 40 }}
              source={require('../assets/icons/Transportations.png')}
              resizeMode="contain"
            />

            <MonoText style={{ marginTop: 7, fontSize: normalize(12), color: 'white' }}>
            {Languages.transportation}
            </MonoText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardStyle}
            onPress={() => this.props.navigation.navigate('Input')}
          >
            <Image
              style={{ height: 40, width: 40, marginLeft: 5 }}
              source={require('../assets/icons/reselling.png')}
              resizeMode="contain"
            />

            <MonoText style={{ marginTop: 7, fontSize: normalize(12), color: 'white' }}>
            {Languages.book}
            </MonoText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardStyle}
            onPress={() => this.props.navigation.navigate('Input')}
          >
            <Image
              style={{ height: 40, width: 40 }}
              source={require('../assets/icons/assets.png')}
              resizeMode="contain"
            />
            <MonoText style={{ marginTop: 7, fontSize: normalize(10), color: 'white' }}>
            {Languages.assets}
            </MonoText>
          </TouchableOpacity>
          <View style={styles.emptyView} />
        </View>
      </ImageBackground>
    );
  }
}
