'use strict';

import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

class AbstractStep extends Component {
  styles = null;
  
  constructor(props) {
    super(props);

    var step = props.recipe.steps[this.props.stepNum];

    this.state = {
      recipe: props.recipe,
      stepNum: props.stepNum,
      step: step,
    };

    this.emitter = props.emitter;
    
    this.styles = EStyleSheet.create({
      mainContainer: {
        backgroundColor: '$backgroundColor',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      },
      stepContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      },
      bottomBar: {
        backgroundColor: '#2A5E91',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
      }
    });
  }

  _nextStep() {
    this.emitter.emit('nextStep');
  }

  _prevStep() {
    this.emitter.emit('prevStep');
  }

}

module.exports = AbstractStep;
