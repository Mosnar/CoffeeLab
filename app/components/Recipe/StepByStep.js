'use strict'

import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import FilterParser from '../../filters/FilterParser';

const styles = EStyleSheet.create({
  mainContainer: {
    backgroundColor: '$backgroundColor',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  stepContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  bottomBar: {
    backgroundColor: '#2A5E91',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  }
});
class StepByStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStepNum: 0,
      recipe: props.recipe
    }
  }

  _goToStep(step) {
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
  }

  componentDidMount() {
    this._goToStep(0);
  }

  _renderStep(stepNum) {
    // TODO: Move this to another file
    var stepMap = {
      'setup': require('./Prompts/StepSetup/StepSetup'),
      'prompt': require('./Prompts/StepPromp/StepPrompt'),
      'timed': require('./Prompts/StepTimedPrompt/StepTimedPrompt'),
      'done': require('./Prompts/StepDone/StepDone')
    };

    var stepName = this.state.recipe.steps[stepNum].type;

    var stepClass = stepMap[stepName];

    if (!stepClass) console.error("Failed to find step class");
    return React.createElement(stepClass, {recipe: this.state.recipe, stepNum: stepNum});
  }
  
  render() {
    var main = (
      <View style={styles.mainContainer}>
        <View style={styles.stepContainer}>
          {this._renderStep(this.state.currentStepNum)}
        </View>
        <TouchableHighlight style={styles.bottomBar} onPress={() => this._goToStep()}><Text>Next</Text></TouchableHighlight>
      </View>
    );
    return main;
  }

}

module.exports = StepByStep;
