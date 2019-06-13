import { createSwitchNavigator } from 'react-navigation';

import AuthNavigation from './AuthNavigation';
import AuthLoadingScreen from './AuthLoadingScreen';
import DrawerNavigation from './DrawerNavigation';

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Main: DrawerNavigation,
    Auth: AuthNavigation,
  },
  {
    initialRouteName: 'Main',
  },
);
