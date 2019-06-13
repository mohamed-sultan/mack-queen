import { createDrawerNavigator } from 'react-navigation';

import AboutScreen from '../screens/sidemenuScreens/AboutScreen';
import PrivacyScreen from '../screens/sidemenuScreens/Privacy';
import TermsScreen from '../screens/sidemenuScreens/Terms';
import {
  InvestorStack, WalletStack, TravelCardStack, ProfileStack,
} from './MainTabNavigator';
import ConatctUsScreen from '../screens/sidemenuScreens/ConatctUsScreen';
import drawerContentComponents from '../components/DrawerContentComponents';

export default createDrawerNavigator(
  {
    Main: InvestorStack,
    Wallet: WalletStack,
    Travel: TravelCardStack,
    Profile: ProfileStack,
    ContactUs: ConatctUsScreen,
    About: AboutScreen,
    Privacy: PrivacyScreen, // You should use another screen.
    Terms: TermsScreen,
  },
  {
    contentComponent: drawerContentComponents,
  },
);
