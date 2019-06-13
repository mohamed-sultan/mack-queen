/* eslint-disable no-console */
/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  AsyncStorage,
  ImageBackground,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';

import { Icon } from 'react-native-elements';
// eslint-disable-next-line import/named
import { removeProfile } from '../redux/actions/user';

import { MonoText } from '../components/StyledText';
import { normalize } from '../constants/Font';
import { ActivitiesCard } from '../components/ActivitiesCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  bodyContainer: {
    flex: 2,
  },
  logoImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  number: {
    fontFamily: 'Roboto-Medium',
    color: 'white',
    fontSize: normalize(25),
  },
  usd: {
    fontFamily: 'Roboto',
    color: 'white',
    fontSize: normalize(16),
    marginTop: 10,
  },
  availble: {
    color: 'white',
    fontSize: normalize(20),
    opacity: 0.5,
  },
  diposit: {
    flexDirection: 'row',
    backgroundColor: '#0084b1',
    borderRadius: 30,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 35,
  },
  dipositText: {
    fontFamily: 'Roboto',
    color: 'white',
    fontSize: normalize(16),
    paddingLeft: 7,
  },
  lefticon: {
    paddingHorizontal: 10,
    position: 'absolute',
    zIndex: 2,
    left: 10,
    top: 70,
    aspectRatio: 1.5,
  },
  rightticon: {
    paddingHorizontal: 10,
    position: 'absolute',
    zIndex: 2,
    right: 10,
    top: 70,
    aspectRatio: 1.5,
  },
  activities: {
    fontSize: normalize(18),
  },
  activitiesView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    opacity: 0.5,
    marginBottom: 10,
  },
});

class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  signOutAsync = async () => {
    await AsyncStorage.removeItem('USER_LOGIN_INFO');
    this.props.removeProfile();
    this.props.navigation.navigate('AuthStack');
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.headerContainer}
          source={require('../assets/images/profileHeader.png')}
          imageStyle={{ resizeMode: 'stretch' }}
        >
          <Icon
            name="sync"
            color="white"
            size={25}
            onPress={() => console.log('hello')}
            containerStyle={styles.rightticon}
          />
          <Image style={styles.logoImage} source={require('../assets/images/profileMan.png')} />
          <Icon
            name="cog"
            type="font-awesome"
            color="white"
            size={25}
            onPress={() => console.log('hello')}
            containerStyle={styles.lefticon}
          />
          <View style={{ flexDirection: 'row', paddingTop: 7 }}>
            <MonoText style={styles.number}>7, 554, 00</MonoText>
            <Text style={styles.usd}> USD</Text>
          </View>
          <MonoText style={styles.availble}>AVAILABLE</MonoText>
          <View style={{ flexDirection: 'row', paddingTop: 7 }}>
            <View style={styles.diposit}>
              <Icon name="archive" type="font-awesome" color="white" size={16} />
              <Text style={styles.dipositText}>Diposit</Text>
            </View>
            <View style={styles.diposit}>
              <Icon name="exchange" type="font-awesome" color="white" size={16} />
              <Text style={styles.dipositText}>Transfer</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.bodyContainer}>
          <ScrollView>
            <View style={styles.activitiesView}>
              <MonoText style={styles.activities}>Recent Activities </MonoText>
              <Icon
                name="arrow-right"
                type="font-awesome"
                color="black"
                size={23}
                onPress={() => console.log('hello')}
                containerStyle={{ marginRight: 10 }}
              />
            </View>
            <ActivitiesCard />
            <Button title="Actually, sign me out :)" onPress={this.signOutAsync} />
          </ScrollView>
        </View>
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  removeProfile: () => dispatch(removeProfile()),
});
export default connect(
  null,
  mapDispatchToProps,
)(ProfileScreen);
