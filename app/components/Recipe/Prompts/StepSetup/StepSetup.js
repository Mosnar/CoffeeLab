'use strict'

import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

var AbstractStep = require('../AbstractStep');

class StepSetup extends AbstractStep {

  constructor(props) {
    super(props);
  }

  render() {
    var main = (
      <View style={this.styles.mainContainer}>
        <View style={this.styles.stepContainer}>
          <Text>Setup! {this.state.stepNum}</Text>
        </View>
        <TouchableHighlight style={this.styles.bottomBar} onPress={() => this._nextStep()}><Text>Next</Text></TouchableHighlight>
      </View>
    );
    return main;
  }

}

module.exports = StepSetup;
