/* eslint-disable no-return-assign */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable class-methods-use-this */
import React from 'react';
import {
  ScrollView,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { MonoText } from '../../components/StyledText';
import CarCard from '../../components/Transportation/CarCard';

class CarChoices extends React.Component {
  static navigationOptions = () => ({
    title: 'Choose Car',
  });

  constructor(props) {
    super(props);
    this.state = {
    };
  }

componentDidMount = async () => {
}

render() {
  return (
        <ScrollView style={{ flex: 1 }}>
         <MonoText style={{ fontSize: 20, color: 'gray', margin: 10 }}>27 Result</MonoText>
        <CarCard navigation={this.props.navigation}
/>
        <CarCard />
        </ScrollView>
  );
}
}
export default withNavigation(CarChoices);
