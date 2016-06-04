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
    flexDirection: 'row'
  }
});

class StepByStep extends Component {
  emitter = null;
  stepMap = null;
  numSteps = null;
  state = null;

  constructor(props) {
    super(props);
    this.emitter = new EventEmitter();
    this._registerEventListeners();
    this.state = {
      currentStepNum: 0,
      recipe: props.recipe
    };
    this.numSteps = props.recipe.steps.length;

    this.stepMap = {
      'setup': React.createFactory(require('./Prompts/StepSetup/StepSetup')),
      'prompt': React.createFactory(require('./Prompts/StepPromp/StepPrompt')),
      'timed': React.createFactory(require('./Prompts/StepTimedPrompt/StepTimedPrompt')),
      'done': React.createFactory(require('./Prompts/StepDone/StepDone'))
    };
  }

  _registerEventListeners() {
    this.emitter.addListener('nextStep', this._nextStep.bind(this));
    this.emitter.addListener('prevStep', this._prevStep.bind(this));
    this.emitter.addListener('endGuide', this._endGuide.bind(this));
  }

  _onLastStep() {
    return this.state.currentStepNum == this.numSteps - 1;

  }

  _nextStep() {
    return this._goToStep();
  }

  _prevStep() {
    return this._goToStep(--this.state.currentStepNum);
  }

  _endGuide() {
    this.props.navigator.pop();
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
    var stepName = this.state.recipe.steps[stepNum].type;

    if (!stepName in this.stepMap) console.error("Couldn't find step", stepName, stepNum);
    var stepClass = this.stepMap[stepName];

    var data = {recipe: this.state.recipe, stepNum: this.state.currentStepNum, emitter: this.emitter};
    var elem = stepClass(data);
    return elem;
  }

  render() {
    var stepDOM = this._renderStep(this.state.currentStepNum);
    var main = (
      <View style={styles.mainContainer}>
        <View style={styles.stepContainer}>
          {stepDOM}
        </View>
      </View>
    );
    return main;
  }

}

module.exports = StepByStep;
