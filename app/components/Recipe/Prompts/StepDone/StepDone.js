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


class StepDone extends AbstractStep {

  constructor(props) {
    super(props);
  }


  render() {
    var main = (
      <View style={this.styles.mainContainer}>
        <Text>
          You're done! Good job!
        </Text>
        <TouchableHighlight style={this.styles.button}
                            onPress={() => this._endGuide()}><Text>Next</Text></TouchableHighlight>
      </View>
    );
    return main;
  }

}

module.exports = StepDone;
