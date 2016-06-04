'use strict';

import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import convert from '../../../../filters/Convert';

var AbstractStep = require('../AbstractStep');


class StepSetup extends AbstractStep {

  constructor(props) {
    super(props);
    this.WT_FROM = 'g';
    this.WT_TO = 'g';
    this.TMP_FROM = 'C';
    this.TMP_TO = 'F';
  }

  _renderWaterDetails(weight, temp) {
    var weightStr = convert({
      val: weight,
      from: this.WT_FROM,
      to: this.WT_TO,
      displayUnits: true,
    });

    var tempStr = convert({
      val: temp,
      from: this.WT_FROM,
      to: this.WT_TO,
      displayUnits: true,
    });

    return (
      <View>
        <Text>You need {weightStr} of {tempStr} water.</Text>
      </View>
    );
  }

  _renderCoffeeDetails(coffeeWeight, grindDetails) {
    var weightStr = convert({
      val: coffeeWeight,
      from: this.WT_FROM,
      to: this.WT_TO,
      displayUnits: true,
    });

    return (
      <View>
        <Text>You need {weightStr} of fresh ground coffee.</Text>
      </View>
    );
  }

  render() {
    var coffeeWeight = this.props.recipe.details.coffeeWeight;
    var waterTemp = this.props.recipe.details.brewTemp;
    var waterWeight = this.props.recipe.details.waterWeight;
    var grindDetails = this.props.recipe.grind;
    var main = (
      <View style={this.styles.mainContainer}>
        <View style={this.styles.stepContainer}>
          {this._renderWaterDetails(waterWeight, waterTemp)}
          {this._renderCoffeeDetails(coffeeWeight, grindDetails)}
        </View>
        <TouchableHighlight style={this.styles.button}
                            onPress={() => this._nextStep()}><Text>Next</Text></TouchableHighlight>
      </View>
    );
    return main;
  }

}

module.exports = StepSetup;
