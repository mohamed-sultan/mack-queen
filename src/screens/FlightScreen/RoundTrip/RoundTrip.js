/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon, CheckBox, ButtonGroup } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import styles from '../../../Styles/FlightStyle';
import { normalize } from '../../../constants/Font';
import { MonoText } from '../../../components/StyledText';
import Languages from '../../../constants/Languages';

export default class RoundTrip extends React.Component {
  static navigationOptions = {
    title: Languages.flight,
  };

  constructor(props) {
    super(props);
    this.state = {
      From: new Date(),
      To: new Date(),
      FromPlace: '',
      ToPlace: '',
      accepted: false,
      Cabin: 2,
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateData = (data) => {
    this.setState({ FromPlace: data });
  };

  returnFrom = () => {
    this.props.route.navigation.navigate('InputCity', {
      updateData: this.updateData,
    });
  };

  updateData2 = async (data) => {
    await this.setState({ ToPlace: data });
  };

  returnFrom2 = () => {
    this.props.route.navigation.navigate('InputCity', {
      updateData: this.updateData2,
    });
  };

  navigate = () => {
    this.props.route.navigation.navigate('FlightSearchResulttwoWay');
  };

  updateIndex(Cabin) {
    this.setState({ Cabin });
  }

  render() {
    const buttons = ['Economy', 'Business', 'First'];
    const { Cabin } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.flightCard}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,
              paddingVertical: 5,
            }}
            onPress={this.returnFrom}
          >
            <Icon color="gray" name="target" type="material-community" size={20} />
            <View style={{ marginHorizontal: 20 }}>
              <Text style={{ fontSize: 12, opacity: 0.6 }}>{Languages.from}</Text>
              <Text style={{ fontSize: normalize(12) }}>{this.state.FromPlace}</Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: 'gray',
              borderBottomWidth: 0.5,
              marginLeft: 50,
              justifyContent: 'center',
            }}
          >
            <Icon
              color="blue"
              name="swap-vert"
              type="material"
              size={25}
              containerStyle={{
                position: 'absolute',
                right: 10,
                zIndex: 999,
                backgroundColor: '#FFF',
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,
              paddingVertical: 5,
            }}
            onPress={this.returnFrom2}
          >
            <Icon color="gray" name="map-marker" type="material-community" size={20} />
            <View style={{ marginHorizontal: 20 }}>
              <Text style={{ fontSize: 12, opacity: 0.6 }}>{Languages.to}</Text>
              <Text style={{ fontSize: normalize(12) }}>{this.state.ToPlace}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.DateContainer}>
            <Icon name="arrow-long-right" size={20} type="entypo" />
            <View style={{}}>
              <Text style={styles.dateText}>{Languages.departure}</Text>
              <DatePicker
                style={{
                  width: 100,
                  height: 20,
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                }}
                date={this.state.From}
                mode="date"
                placeholder="select date"
                format="DD-MM-YYYY"
                minDate={new Date()}
                maxDate="30-11-2019"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                customStyles={{
                  dateInput: {
                    backgroundColor: '#FFF',
                    borderWidth: 0,
                    height: 15,
                  },
                }}
                onDateChange={(From) => {
                  this.setState({ From });
                }}
              />
            </View>
          </View>
          <View style={styles.DateContainer}>
            <Icon
              name="arrow-long-left"
              size={20}
              type="entypo"
              containerStyle={{ marginLeft: 10 }}
            />
            <View>
              <Text style={styles.dateText}>{Languages.return}</Text>
              <DatePicker
                style={{
                  width: 100,
                  height: 20,
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                }}
                date={this.state.To}
                mode="date"
                placeholder="select date"
                format="DD-MM-YYYY"
                minDate="17-02-2019"
                maxDate="30-12-2019"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                customStyles={{
                  dateInput: {
                    backgroundColor: '#FFF',
                    borderWidth: 0,
                    height: 15,
                  },
                }}
                onDateChange={(To) => {
                  this.setState({ To });
                }}
              />
            </View>
          </View>
        </View>

        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={Cabin}
          buttons={buttons}
          containerStyle={styles.groupButton}
        />
        <CheckBox
          title={Languages.dirctflight}
          iconRight
          checked={this.state.accepted}
          onPress={() => this.setState({ accepted: !this.state.accepted })}
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
        />
        <TouchableOpacity style={styles.button} onPress={() => this.navigate()}>
          <MonoText style={styles.buttonText}>{Languages.search}</MonoText>
        </TouchableOpacity>
      </View>
    );
  }
}
