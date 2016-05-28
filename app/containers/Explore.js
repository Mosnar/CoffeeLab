'use strict'

import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  StyleSheet,
} from 'react-native';


export default class Explore extends Component {

  constructor (props) {
    super(props);
  }


  render () {
    return (
      <View style={styles.container}>
       <Text>Explore</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  description: {
          fontSize: 20,
          backgroundColor: 'white'
      },
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
});
