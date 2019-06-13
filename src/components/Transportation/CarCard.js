/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  StyleSheet, Dimensions, View, ActivityIndicator, TouchableOpacity,
} from 'react-native';
import { Image, Rating, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import { MonoText } from '../StyledText';

const deviceWidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    marginLeft: 5,
    backgroundColor: '#FFF',
    width: deviceWidth - 10,
    //  height: deviceheight / 4,
    borderRadius: 5,
    margin: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  image: {
    width: 90,
    height: deviceheight / 8,
    margin: 5,
    borderRadius: 10,
  },
  icon: {
    alignContent:
     'center',
    alignItems: 'center',
    opacity: 0.5,
    margin: 10,
  },
  instructionStyle: {
    backgroundColor: '#f3f6f7',
    marginLeft: 20,
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    height: 40,
    borderRadius: 10,
  },
  reviewStyle: {
    alignContent: 'center',
    alignItems: 'center',
    margin: 10,
    flexDirection: 'row',
  },
});
class CarCard extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      image: 'https://ic.maxabout.us//cars/maruti/2011-new-swift//2011_New_Maruti_Swift_India_11.jpg',
    };
    this.Navigate = this.Navigate.bind(this);
  }

  Navigate = async () => {
    await this.props.navigation.navigate('AdultData');
  }

  componentDidMount = async () => {
  }

  render() {
    return (
  <TouchableOpacity
    elevation={5}
    style={styles.card}
    onPress={this.Navigate}
  >
  <View style={{ flexDirection: 'row', flex: 1 }}>
    <Image
      source={{
        uri: this.state.image,
      }}
        style={ styles.image}
        imageStyle={{ resizeMode: 'contain' }}
        PlaceholderContent={<ActivityIndicator />}
        />
    <View style={{ margin: 5, flex: 3 }}>
      <View style={{ alignItems: 'flex-start' }}>
      <MonoText style={{ fontSize: 20 }}>Car Name and Type</MonoText>
      <Rating
        imageSize={15}
        readonly
        startingValue={3}
        style={{ alignItems: 'flex-start', marginVertical: 10 }}
        // ratingBackgroundColor="transparent"
        />
        </View>
      <View style={{ flexDirection: 'row' }}>
        <Image
        source={require('../../assets/icons/valid.png')}
        style={{ width: 16, height: 16 }}
        imageStyle={{ resizeMode: 'contain' }}
        />
        <MonoText style={{
          fontSize: 15, marginHorizontal: 10,
        }}>
        Feature of This Car</MonoText>
        </View>
    </View>
        </View>
  <View style={{ flex: 1, padding: 10, marginTop: 5 }}>
        <View style={{ flexDirection: 'row' }}>
        <View style={styles.icon}>
        <Icon
             name='user'
            type='font-awesome'
        size={18}
        />
        <MonoText>6</MonoText>
    </View>
        <View style={styles.icon}>
        <Icon
            name='briefcase'
            type='font-awesome'
            size={18}
        />
        <MonoText>4</MonoText>
    </View>
        <View style={styles.icon}>
        <Icon
            name='cog'
            type='font-awesome'
             size={18}
        />
        <MonoText>auto</MonoText>
         </View>
      <View style={ styles.instructionStyle }>
      <MonoText style={{ color: '#36c877', paddingHorizontal: 10 }}>Free Cancellation</MonoText>
      <MonoText style={{ color: '#36c877' }}>Pay Later</MonoText>
      </View>
    </View>
    <View style={{
      backgroundColor: '#f3f6f7', flexDirection: 'row', margin: 10, justifyContent: 'space-between',
    }}>
  <View style={styles.reviewStyle}>
        <Icon
             name='clipboard'
            type='font-awesome'
        size={15}
        />
        <MonoText style={{ marginLeft: 10 }}>8,9</MonoText>
      <MonoText style={{ color: '#bfc3c4', fontSize: 12, marginLeft: 5 }}>- 356 Reviews</MonoText>
    </View>
      <MonoText style= {{ color: 'red', fontSize: 18, alignSelf: 'center' }}>102 SAR</MonoText>
  </View>
 </View>
  </TouchableOpacity>
    );
  }
}
const mapDispatchToProps = () => ({
});

export default connect(
  null,
  mapDispatchToProps,
)(CarCard);
