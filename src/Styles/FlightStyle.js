import { StyleSheet } from 'react-native';
import { scale, verticalScale } from '../Helpers';
import { normalize } from '../constants/Font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffaf20',
    width: scale(300),
    height: verticalScale(38),
    marginVertical: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  flightCard: {
    backgroundColor: '#FFF',
    width: scale(300),
    marginTop: 20,
  },
  groupButton: {
    height: 45,
    width: scale(300),
  },
  PickerStyle: {
    height: 45,
    width: scale(300),
    backgroundColor: '#FFF',
    marginTop: 10,
  },
  DateContainer: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    width: scale(145),
    height: 45,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 5,
    margin: 5,
  },
  FullDateContainer: {
    backgroundColor: '#FFF',
    width: scale(300),
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
    margin: 5,
    paddingLeft: 20,
  },
  checkboxContainer: {
    backgroundColor: null,
    borderWidth: 0,
    padding: 2.5,
    margin: 5,
  },
  checkboxText: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
  },
  Input: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    width: scale(300),
    height: 50,
    margin: 5,
    alignItems: 'center',
    borderRadius: 5,
    paddingLeft: 20,
  },
  buttonText: {
    fontFamily: 'Roboto-Medium',
    color: '#FFF',
    fontSize: normalize(15),
  },
  dateText: {
    alignItems: 'center',
    marginLeft: 15,
    opacity: 0.5,
  },
});
export default styles;
