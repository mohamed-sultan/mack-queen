import { createStackNavigator } from 'react-navigation';
import { Easing, Animated } from 'react-native';
import SignInScreen from '../screens/Authentification/SignInScreen';
import SignUpScreen from '../screens/Authentification/SignUpScreen';
import ForgetPasswordScreen from '../screens/Authentification/ForgetPasswordScreen';

export default createStackNavigator(
  {
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
    ForgetPassword: ForgetPasswordScreen,
  },
  {
    headerVisible: false,
    headerMode: 'none',
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
