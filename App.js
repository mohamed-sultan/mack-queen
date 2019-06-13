/* eslint-disable global-require */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';

import {
  AppLoading, Asset, Font, Icon,
} from 'expo';
import { I18nManager } from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import configureStore from './src/redux/ConfigureStore';

const { persistor, store } = configureStore();

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    I18nManager.allowRTL(true);

    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }
    return (
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <DrawerNavigation />
        </Provider>
      </PersistGate>
    );
  }

  _loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([
      require('./src/assets/images/Logo.png'),
      require('./src/assets/images/signup.png'),
      require('./src/assets/images/background.png'),
      require('./src/assets/images/profileHeader.png'),
      require('./src/assets/images/sideMenu.jpg'),
    ]),
    Font.loadAsync({
      ...Icon.Ionicons.font,
      'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
      Lato: require('./src/assets/fonts/Lato-Regular.ttf'),
    }),
  ]);

  _handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}
