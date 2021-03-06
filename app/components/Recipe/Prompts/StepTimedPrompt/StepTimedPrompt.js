'use strict';

import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

var AbstractStep = require('../AbstractStep');


class StepTimedPrompt extends AbstractStep {
  constructor(props) {
    super(props);
  }


  render() {
    var step = this.props.recipe.steps[this.props.stepNum];
    var text = this._applyFilters(step.text);
    var time = this.props.time;

    var main = (
      <View style={this.styles.mainContainer}>
        <Text>
          {text}
        </Text>
        <Text>
          {time}
        </Text>
        <TouchableHighlight style={this.styles.button}
                            onPress={() => this._nextStep()}><Text>Next</Text></TouchableHighlight>
      </View>
    );
    return main;
  }

}

module.exports = StepTimedPrompt;
