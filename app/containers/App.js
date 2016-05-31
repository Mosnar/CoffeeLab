'use strict'

import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

var Explore = require('./Explore');


class App extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Explore />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});

module.exports = App;
