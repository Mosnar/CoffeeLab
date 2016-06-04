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

import FilterParser from '../../../filters/FilterParser';

class AbstractStep extends Component {
  styles = null;
  listener = null;

  constructor(props) {
    super(props);

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
        flexDirection: 'column',
      },
      button: {
        backgroundColor: '#2A5E91',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
      },
    });
  }

  _endGuide() {
    this.emitter.emit('endGuide');
  }

  _nextStep() {
    this.emitter.emit('nextStep');
  }

  _prevStep() {
    this.emitter.emit('prevStep');
  }

  _applyFilters(text:string):string {
    return FilterParser(text);
  }

}

module.exports = AbstractStep;
