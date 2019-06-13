/* eslint-disable no-multi-spaces */
/* eslint-disable eqeqeq */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable class-methods-use-this */
import React from 'react';
import {
  ScrollView, FlatList, TouchableOpacity, Text, View,
} from 'react-native';
import { Icon, Button } from 'react-native-elements';
import moment from 'moment';
import { scale, verticalScale } from '../../../Helpers';

import { MonoText } from '../../../components/StyledText';
import MultiCityCard from '../../../components/FlightCards/multicityCard';

const fulldata = [
  {
    id: '0',
    data: [
      {
        id: '0',
        from: 'RHU',
        To: 'DXB',
        value: '1.400',
        Timefrom: '20:20',
        TimeTo: '4:20',
        selected: true,
      },
      {
        id: '1',
        from: 'RXD',
        To: 'CSX',
        value: '1.900',
        Timefrom: '20:20',
        TimeTo: '4:20',
      },
      {
        id: '2',
        from: 'RHX',
        To: 'RTY',
        value: '1.200',
        Timefrom: '20:20',
        TimeTo: '4:20',
      },
    ],
  },
  {
    id: '1',
    data: [
      {
        id: '0',
        from: 'RCJ',
        To: 'DXB',
        value: '1000',
        Timefrom: '20:20',
        TimeTo: '4:20',
        selected: true,
      },
      {
        id: '1',
        from: 'DFC',
        To: 'CSX',
        value: '1800',
        Timefrom: '20:20',
        TimeTo: '4:20',
      },
      {
        id: '2',
        from: 'TGY',
        To: 'RTY',
        value: '1.200',
        Timefrom: '20:20',
        TimeTo: '4:20',
      },
    ],
  },
  {
    id: '2',
    data: [
      {
        id: '0',
        from: 'CDD',
        To: 'GGG',
        value: '2000',
        Timefrom: '20:20',
        TimeTo: '4:20',
        selected: true,
      },
      {
        id: '1',
        from: 'XXX',
        To: 'VVV',
        value: '1800',
        Timefrom: '20:20',
        TimeTo: '4:20',
      },
      {
        id: '2',
        from: 'TTT',
        To: 'HHH',
        value: '5000',
        Timefrom: '20:20',
        TimeTo: '4:20',
      },
    ],
  },
];
export default class MultiCityResult extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Result',
    headerRight: (
      <Button
        onPress={() => navigation.navigate('SubmitFlight')}
        title="proceed"
        icon={{
          name: 'ios-checkmark',
          size: 15,
          color: 'white',
          type: 'ionicon',
        }}
        iconRight
        containerStyle={{ marginRight: 10 }}
        // color="#fff"
      />
    ),
  });

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      index2: null,
      data: this.props.navigation.state.params,
      dataa: fulldata[0].data,
      nb: this.props.navigation.state.params.length,
      selected: [],
    };
  }

  componentDidMount() {}

  toggle = async (position) => {
    if (this.state.index !== position) {
      await this.setState({ index: position });
      await this.setState({ dataa: fulldata[position].data });
    }
  };

  toggle2 = async (position) => {
    if (this.state.index2 !== position) {
      await this.setState({ index2: position });
      const {
        selected, index, dataa, index2,
      } = this.state;
      selected[index] = dataa[index2];
      await this.setState({ selected });
      if (this.state.index != this.state.nb - 1) {
        await this.setState({
          index: this.state.index + 1,
          dataa: fulldata[this.state.index + 1].data,
        });
      }
    }
  };

  myColor2(position) {
    const { selected, index } = this.state;
    if (selected.length == 0) {
      return '#FFF';
    }
    if (selected[index] !== undefined) {
      if (selected[index].id == position) {
        return '#2CB895';
      }
    }
    return '#FFF';
  }

  myColor(position) {
    if (this.state.index == position) {
      return '#2CB895';
    }
    return '#FFF';
  }

  _keyExtractor = item => item.id.toString();

  _renderItem2 = ({ item }) => (
    <MultiCityCard
      color={this.myColor2(item.id)}
      onPress={() => {
        this.toggle2(item.id);
      }}
      startTime={item.Timefrom}
      startPlace={item.from}
      endTime={item.TimeTo}
      endPlace={item.To}
      Price={item.value}
    />
  );

  _renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        this.toggle(item.id);
      }}
      style={{
        marginHorizontal: 10,
        width: scale(200),
        height: verticalScale(90),
        borderRadius: 5,
        marginVertical: 10,
        borderColor: 'black',
        alignItems: 'center',
        backgroundColor: this.myColor(item.id),
        shadowColor: '#000000',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 1,
        },
      }}
      elevation={2}
    >
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
          flex: 1,
        }}
      >
        <Icon name="ios-airplane" type="ionicon" color="black" size={16} />
        <Text style={{ marginHorizontal: 15 }}>
          <Text>{item.id + 1}</Text> of <Text> {this.state.nb}</Text>
        </Text>
        <Text>{moment(item.date).format('MMMM Do YYYY')}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Text>CCJ</Text>
        <Icon
          name="ios-arrow-round-forward"
          type="ionicon"
          color="black"
          size={20}
          containerStyle={{ marginHorizontal: 15 }}
        />
        <Text>COK</Text>
      </View>
    </TouchableOpacity>
  );

  button() {
    this.props.navigation.navigate('SubmitFlight');
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <FlatList
          horizontal={true}
          data={this.state.data}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          extraData={this.state}
        />
        <MonoText style={{ fontSize: 20, color: 'gray', margin: 10 }}>More options</MonoText>
        <FlatList
          horizontal={false}
          data={this.state.dataa}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem2}
          extraData={this.state}
        />
      </ScrollView>
    );
  }
}
