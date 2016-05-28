'use strict'

import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  StyleSheet,
} from 'react-native';


class App extends Component {

  constructor (props) {
    super(props);
  }


  render () {
    return (
      <View style={styles.container}>
       <Text>Hey</Text>
      </View>
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
