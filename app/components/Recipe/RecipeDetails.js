'use strict'

import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import convert from '../../filters/convert';

class RecipeDetails extends Component {

  constructor(props) {
    super(props);

    this.WT_FROM = 'g';
    this.WT_TO = 'g';
    this.TMP_FROM = 'C';
    this.TMP_TO = 'C';
  }

  render() {
    var details = this.props.details;

    return (
      <View style={{flex: 1}}>
        <Text>Amount of Coffee: {convert(details.coffeeWeight, this.WT_FROM, this.WT_TO)}</Text>
        <Text>Amount of Water: {convert(details.waterWeight, this.WT_FROM, this.WT_TO)}</Text>
        <Text>Brew Temp: {convert(details.brewTemp, this.TMP_FROM, this.TMP_TO)}</Text>
      </View>
    );
  }


}

module.exports = RecipeDetails;
