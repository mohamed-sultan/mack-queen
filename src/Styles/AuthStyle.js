import { StyleSheet, Dimensions } from 'react-native';
import { normalize } from '../constants/Font';
import { scale, verticalScale } from '../Helpers';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  imageStyle: {
    width: deviceWidth / 2,
    height: deviceHeight / 5,
    resizeMode: 'contain',
  },
  button: {
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#009ccc',
    width: scale(280),
    height: verticalScale(38),
    // marginVertical: 20,
    alignSelf: 'center',
  },
  button2: {
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fbb039',
    width: scale(280),
    height: verticalScale(38),
    // marginVertical: 20,
    alignSelf: 'center',
  },
  lottie: {
    width: 150,
    height: 150,
  },
  InputStyle: {
    borderWidth: 0,
    borderRadius: 30,
    borderColor: 'white',
    backgroundColor: 'white',
    opacity: 0.7,
    width: scale(280),
    height: verticalScale(43),
    padding: 7,
    alignSelf: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  checkboxContainer: {
    backgroundColor: null,
    borderWidth: 0,
    padding: 2.5,
    margin: 5,
  },
  checkboxText: {
    color: '#FFF',
    fontSize: normalize(18),
    fontFamily: 'Roboto-Medium',
  },
  logoImage: {
    width: deviceWidth / 2,
    height: deviceHeight / 4,
    resizeMode: 'contain',
  },
  socialView: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Roboto-Medium',
    color: '#FFF',
    fontSize: normalize(15),
  },
  buttonwidth: {
    width: 250,
  },
});
export default styles;
