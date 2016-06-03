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
var {EventEmitter} = require('fbemitter');

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
  }
});

class StepByStep extends Component {
  constructor(props) {
    super(props);
    this.emitter = new EventEmitter();
    this._registerEventListeners();
    this.state = {
      currentStepNum: 0,
      recipe: props.recipe
    }
    this.numSteps = props.recipe.steps.length;
  }

  _registerEventListeners() {
    this.emitter.addListener('nextStep', this._nextStep.bind(this));
    this.emitter.addListener('prevStep', this._prevStep.bind(this));
  }

  _onLastStep() {
    if (this.state.currentStepNum == this.numSteps - 1) {
      return true;
    }
    return false;
  }

  _nextStep() {
    return this._goToStep();
  }

  _prevStep() {
    return this._goToStep(--this.state.currentStepNum);
  }

  /**
   * Goes to a particular step and emits a "stepChanged" event with an object payload of newStep and oldStep
   * @param step Optional step
   * @returns {number}
   * @private
   */
  _goToStep(step:?int):int {
    if (this._onLastStep()) {
      return false;
    }
    if (step < 0) {
      return false;
    }
    var oldStep = this.state.currentStepNum;
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
    this.emitter.emit('stepChanged', {newStep: this.state.currentStepNum, oldStep: oldStep});
    return this.state.currentStepNum;
  }

  /**
   * Sets state to step 0 on mount
   */
  componentDidMount() {
    this._goToStep(0);
  }

  /**
   * Renders the appropriate step component.
   * @param stepNum Step number
   * @returns {*|Element}
   * @private
   */
  _renderStep(stepNum:int) {
    // TODO: Move this to another file
    // TODO: Add failsafe for missing component
    var stepMap = {
      'setup': require('./Prompts/StepSetup/StepSetup'),
      'prompt': require('./Prompts/StepPromp/StepPrompt'),
      'timed': require('./Prompts/StepTimedPrompt/StepTimedPrompt'),
      'done': require('./Prompts/StepDone/StepDone')
    };

    var stepName = this.state.recipe.steps[stepNum].type;

    if (!stepName in stepMap) console.error("Couldn't find step", stepName, stepNum);
    var stepClass = stepMap[stepName];

    return React.createElement(stepClass, {recipe: this.state.recipe, stepNum: stepNum, emitter: this.emitter});
  }

  render() {
    var main = (
      <View style={styles.mainContainer}>
        <View style={styles.stepContainer}>
          {this._renderStep(this.state.currentStepNum)}
        </View>
      </View>
    );
    return main;
  }

}

module.exports = StepByStep;
