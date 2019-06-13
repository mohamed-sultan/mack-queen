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

export default class OneWayFlight extends React.Component {
  static navigationOptions = {
    title: Languages.flight,
  };

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      FromPlace: '',
      ToPlace: '',
      Cabin: 2,
      FromError: null,
      ToError: null,
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateData = async (data) => {
    await this.setState({ FromPlace: data });
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

  updateIndex(Cabin) {
    this.setState({ Cabin });
  }

  navigate = () => {
    this.props.route.navigation.navigate('FlightResult');
  };

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

        <View style={styles.FullDateContainer}>
          <Icon color="gray" name="md-arrow-round-forward" type="ionicon" size={20} />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 12, opacity: 0.6 }}>{Languages.departure}</Text>
            <DatePicker
              style={{
                width: 100,
                height: 20,
              }}
              date={this.state.date}
              mode="date"
              placeholder="04/03/2019"
              format="DD-MM-YYYY"
              minDate="18-02-2019"
              maxDate="30-11-2019"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              showIcon={false}
              customStyles={{
                dateInput: {
                  borderWidth: 0,
                  width: 60,
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                },
              }}
              onDateChange={(date) => {
                this.setState({ date });
              }}
            />
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
