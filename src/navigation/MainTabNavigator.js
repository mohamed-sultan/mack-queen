/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';
import { Easing, Animated, Platform } from 'react-native';

import { createStackNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';
import TabBarIcon from '../components/TabBarIcon';
import InvestorScreen from '../screens/InvestorScreen';
import WalletScreen from '../screens/WalletScreen';
import TravelCardScreen from '../screens/TravelCardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FlightSearchScreen from '../screens/FlightScreen/FlightSearchScreen';
import ConatctUsScreen from '../screens/sidemenuScreens/ConatctUsScreen';
import AboutScreen from '../screens/sidemenuScreens/AboutScreen';
import PrivacyScreen from '../screens/sidemenuScreens/Privacy';
import TermsScreen from '../screens/sidemenuScreens/Terms';
import OneWayFlight from '../screens/FlightScreen/OneWay/OneWayFlight';
import FlightResult from '../screens/FlightScreen/OneWay/SearchResult';
import FlightSearchResulttwoWay from '../screens/FlightScreen/RoundTrip/SearchResult';
import SubmitFlight from '../screens/FlightScreen/SubmitFlight';
import TravellerDetails from '../screens/FlightScreen/TravellerDetails';
import AdultData from '../screens/FlightScreen/AdultData';
import CountryCodeList from '../screens/FlightScreen/CountryPicker';
import MultiCityResult from '../screens/FlightScreen/MultiCity/multicityResult';
import HotelForm from '../screens/hotelsScreens/HotelsForm';
import HotelResult from '../screens/hotelsScreens/SearchResult';
import AvailbleRooms from '../screens/hotelsScreens/AvailbleRooms';
import RoomDetails from '../screens/hotelsScreens/RoomDetails';
import HotelDetails from '../screens/hotelsScreens/HotelDetails';
import SubmitHotel from '../screens/hotelsScreens/SubmitHotel';
import InputCity from '../screens/input';
import InputFlight from '../screens/FlightScreen/MultiCity/inputFlight';
import AuthNavigation from './AuthNavigation';
import TransportationForm from '../screens/Transportation/TransportationForm';
import CarChoices from '../screens/Transportation/CarChoices';
import InputPlaces from '../screens/Transportation/InputPlaces';

const headerStyle = {
  headerBackground: (
    <LinearGradient
      colors={['#005e9c', '#0099ca']}
      style={{ flex: 1 }}
      start={[0, 0]}
      end={[1, 0]}
    />
  ),
  headerTintColor: 'white',
  headerTitleStyle: {
    fontSize: 18,
    alignSelf: 'center',
  },
};

export const InvestorStack = createStackNavigator(
  {
    Investor: InvestorScreen,
    FlightSearch: FlightSearchScreen,
    ContactUs: ConatctUsScreen,
    AuthStack: {
      screen: AuthNavigation,
      // eslint-disable-next-line no-unused-vars
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    },
    About: AboutScreen,
    Privacy: PrivacyScreen,
    Terms: TermsScreen,
    OneWayFlight,
    FlightResult,
    SubmitFlight,
    FlightSearchResulttwoWay,
    TravellerDetails,
    AdultData,
    CountryCodeList,
    HotelForm,
    HotelResult,
    AvailbleRooms,
    RoomDetails,
    HotelDetails,
    SubmitHotel,
    InputCity,
    MultiCityResult,
    InputFlight,
    TransportationForm,
    CarChoices,
    InputPlaces,
  },
  {
    navigationOptions: headerStyle,
    mode: 'modal',
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 400,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: (sceneProps) => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
  },
);

export const WalletStack = createStackNavigator(
  {
    Wallet: WalletScreen,
  },
  {
    navigationOptions: headerStyle,
    mode: 'modal',
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 400,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: (sceneProps) => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
  },
);

export const TravelCardStack = createStackNavigator(
  {
    TravelCard: TravelCardScreen,
  },
  {
    navigationOptions: headerStyle,
    mode: 'modal',
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 400,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: (sceneProps) => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
  },
);

export const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  {
    navigationOptions: headerStyle,
    mode: 'modal',
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 400,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: (sceneProps) => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
  },
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  // eslint-disable-next-line react/display-name
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} />
  ),
};
