'use strict'

import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10
  }
});

class Recipe extends Component {
  render() {
    var recipe = this.props.recipe;
    var meta = recipe.meta;
    var details = recipe.details;
    var steps = recipe.steps;
    var numSteps = steps.length;
    return (
      <View style={styles.container}><Text>There are {numSteps} steps in this recipe</Text></View>
    );
  }
}

module.exports = Recipe;
