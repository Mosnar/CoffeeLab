'use strict';

import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  StyleSheet,
  NavigatorIOS,
} from 'react-native';


class Recipes extends Component {
  render() {
    var method = this.props.method;

    return (
      <View style={styles.container}>
        <Text>{method.title}</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 75,
    alignItems: 'center'
  },
  image: {
    width: 107,
    height: 165,
    padding: 10
  },
  description: {
    padding: 10,
    fontSize: 15,
    color: '#656565'
  }
});

module.exports = Recipes;
