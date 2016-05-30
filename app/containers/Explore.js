'use strict'

import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  StyleSheet,
  NavigatorIOS,
  Navigator
} from 'react-native';

var BrewMethodList = require('../components/BrewMethodList/BrewMethodList');

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

// TODO: Add a filter button to top right (UINAvigatoButton)
class Explore extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Explore',
          navigationBarHidden: true,
          component: BrewMethodList
        }}
      />
    );
  }
}

module.exports = Explore;
