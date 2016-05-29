'use strict'

import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  StyleSheet,
  NavigatorIOS,
} from 'react-native';

var BrewMethodList = require('../components/BrewMethodList');

const styles = StyleSheet.create({
  container: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center'
  }
});

class Explore extends Component {
  render () {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Explore',
          component: BrewMethodList
        }}
      />
    );
  }
}

module.exports = Explore;
