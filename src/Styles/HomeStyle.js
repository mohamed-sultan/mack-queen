import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
// import colors from "../utils/colors";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    resizeMode: 'cover',
  },
  logoContainer: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  logoImage: {
    width: deviceWidth / 2 - 15,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginLeft: 40,
  },
  NavStyle: {
    flex: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 20,
  },
  cardStyle: {
    width: deviceWidth / 3 + 5,
    height: deviceHeight / 6 - 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 40,
    marginHorizontal: 15,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255, 0.2)',
  },
  emptyView: {
    width: deviceWidth / 3 + 5,
    height: deviceHeight / 6 - 10,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  LogoBackground: {
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
