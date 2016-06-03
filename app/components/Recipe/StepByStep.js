'use strict'

import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

import FilterParser from '../../filters/FilterParser';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20
  }
});
class StepByStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStepNum: 0
    }
  }

  goToStep(step) {
    var currentStep = this.state.currentStepNum;
    if (step === null || step === undefined) {
      currentStep = currentStep + 1;
      this.setState({
        currentStepNum: currentStep
      });
    } else {
      this.setState({
        currentStepNum: step
      });
    }
    console.warn("Next step", currentStep);
  }

  componentDidMount() {
    this.goToStep(0);
  }
  

  render() {
    var recipe = this.props.recipe;
    var meta = recipe.meta;
    var details = recipe.details;
    var steps = recipe.steps;
    var numSteps = steps.length;

    var currentStepData = steps[this.state.currentStepNum];


    var main = (
      <TouchableHighlight onPress={() => this.goToStep()}>
        <View style={styles.mainContainer}>
          <Text>Step {currentStepData.type}</Text>
        </View>
      </TouchableHighlight>
    );
    return main;
  }

}

module.exports = StepByStep;
