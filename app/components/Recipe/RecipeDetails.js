'use strict'

import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';

import convert from '../../filters/convert';


var styles = StyleSheet.create({
  container: {
    backgroundColor: '#81c04d',
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    opacity: .9
  },
  infoTextContainer: {
    flex: 1,
    alignItems: 'center',
  },
  infoText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  icons: {
    width: 20,
    height: 20,
    marginBottom: 5,
  }

});

class RecipeDetails extends Component {

  constructor(props) {
    super(props);

    this.WT_FROM = 'g';
    this.WT_TO = 'g';
    this.TMP_FROM = 'C';
    this.TMP_TO = 'F';
  }

  render() {
    var details = this.props.details;


    var beanWeight = convert({
      val: details.coffeeWeight,
      from: this.WT_FROM,
      to: this.WT_TO,
      displayUnits: true,
    });

    var waterWeight = convert({
      val: details.waterWeight,
      from: this.WT_FROM,
      to: this.WT_TO,
      displayUnits: true,
    });

    var waterTemp = convert({
      val: details.brewTemp,
      from: this.TMP_FROM,
      to: this.TMP_TO,
      displayUnits: true,
      precision: 0
    });

    return (
      <View style={styles.container}>
        <View style={styles.infoTextContainer}>
          <Image
            source={{uri: 'icon_beans'}}
            style={styles.icons}/>
          <Text style={styles.infoText}>{beanWeight}</Text>
        </View>
        <View style={styles.infoTextContainer}>
          <Image
            source={{uri: 'icon_water'}}
            style={styles.icons}/>
          <Text style={styles.infoText}> {waterWeight}</Text>
        </View>
        <View style={styles.infoTextContainer}>
          <Image
            source={{uri: 'icon_brewtemp'}}
            style={styles.icons}/>
          <Text style={styles.infoText}>{waterTemp}</Text>
        </View>
      </View>
    );
  }


}

module.exports = RecipeDetails;
