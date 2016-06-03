'use strict'

import React, {
  Component,
} from 'react';

import {
  Text,
  View
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

// Base stylesheet
import theme from '../styles/theme';

var Explore = require('./Explore');


class App extends Component {
  constructor(props) {
    super(props);
    EStyleSheet.build(theme);
  }


  render() {
    return (
      <Explore />
    );
  }
}

module.exports = App;
