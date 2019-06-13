/* eslint-disable indent */
/* eslint-disable class-methods-use-this */
/* eslint-disable */

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import { normalize } from '../../../constants/Font';
import { scale, verticalScale } from '../../../Helpers';
import Languages from '../../../constants/Languages';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
    borderColor: 'black',
    borderWidth: 0.5,
    backgroundColor: '#FFF',
    width: scale(330),
  },
  topText: {
    backgroundColor: '#005e9c',
    paddingLeft: 20,
    color: 'white',
  },
  inputStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  line: {
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginLeft: 50,
    justifyContent: 'center',
  },
});

export default class MultiCity extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: 2,
      data: [
        {
          id: 0,
          titre: Languages.flight1,
          From: '',
          To: '',
          date: new Date(),
        },
        {
          id: 1,
          titre: Languages.flight2,
          From: '',
          To: '',
          date: new Date(),
        },
      ],
    };
  }
  navigate = () => {
    let { data } = this.state;
    this.props.route.navigation.navigate('MultiCityResult', data);
  };
  onAdd = async () => {
    await this.setState(prevState => ({ id: prevState.id + 1 }));
    await this.setState(prevState => ({
      id: this.state.id,
      data: [
        ...prevState.data,
        {
          id: this.state.id - 1,
          titre: Languages.flights + this.state.id,
          From: '',
          To: '',
          date: new Date(),
        },
      ],
    }));
  };
  updateData = async (value, index, champ) => {
    const { data } = this.state;
    data[index][champ] = value;
    await this.setState({ data });
  };
  render() {
    const { navigate } = this.props.route.navigation;
    return (
      <ScrollView style={{ flex: 1 }}>
        {this.state.data.map(({ titre, From, To, date }, index) => {
          return (
            <View style={styles.container} key={index}>
              <Text style={styles.topText}>{titre}</Text>
              <TouchableOpacity
                style={styles.inputStyle}
                onPress={() => {
                  navigate('InputFlight', {
                    updateData: this.updateData,
                    index,
                    champ: 'From',
                  });
                }}
              >
                <Icon color="gray" name="target" type="material-community" size={20} />
                <View style={{ marginHorizontal: 20 }}>
                  <Text style={{ fontSize: 12, opacity: 0.6 }}>{Languages.from}</Text>
                  <Text style={{ fontSize: normalize(12) }}>{From}</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.line}>
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
                style={styles.inputStyle}
                onPress={() => {
                  navigate('InputFlight', {
                    updateData: this.updateData,
                    index,
                    champ: 'To',
                  });
                }}
              >
                <Icon color="gray" name="map-marker" type="material-community" size={20} />
                <View style={{ marginHorizontal: 20 }}>
                  <Text style={{ fontSize: 12, opacity: 0.6 }}>{Languages.to}</Text>
                  <Text style={{ fontSize: normalize(12) }}>{To}</Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  opacity: 0.2,
                }}
              />

              <View style={styles.inputStyle}>
                <Icon color="gray" name="md-arrow-round-forward" type="ionicon" size={20} />
                <View style={{ marginHorizontal: 20, marginBottom: 5 }}>
                  <Text style={{ fontSize: 12, opacity: 0.6 }}>{Languages.departure}</Text>
                  <DatePicker
                    style={{
                      width: 100,
                      height: 20,
                    }}
                    date={this.state.data[index].date}
                    mode="date"
                    placeholder="04/03/2019"
                    format="DD-MM-YYYY"
                    minDate={new Date()}
                    maxDate="30-11-2019"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    onDateChange={val => {
                      this.updateData(val, index, 'date');
                    }}
                    showIcon={false}
                    customStyles={{
                      dateInput: {
                        borderWidth: 0,
                        width: 60,
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                      },
                    }}
                  />
                </View>
              </View>
            </View>
          );
        })}
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Button
            onPress={this.onAdd}
            icon={{
              name: 'plus',
              size: 18,
              color: 'white',
              type: 'entypo',
            }}
            title={Languages.addFlight}
            containerStyle={{ padding: 5, width: scale(169) }}
            titleStyle={{ fontSize: 15 }}
          />
          <Button
            onPress={this.navigate}
            icon={{
              name: 'search',
              size: 18,
              color: 'white',
              type: 'font-awesome',
            }}
            title={Languages.search}
            containerStyle={{ padding: 5, width: scale(169) }}
            titleStyle={{ fontSize: 15 }}
          />
        </View>
      </ScrollView>
    );
  }
}
