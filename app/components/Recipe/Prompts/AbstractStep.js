'use strict';

import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

class AbstractStep extends Component {
  styles = null;
  
  constructor(props) {
    super(props);
    this.state = {
      recipe: null,
      stepNum: null,
      step: null
    };
    
    this.styles = EStyleSheet.create({
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

  }

  componentDidMount() {
    var step = this.props.recipe.steps[this.props.stepNum];
    this.setState({
      recipe: this.props.recipe,
      stepNum: this.props.stepNum,
      step: step
    });
  }
}

module.exports = AbstractStep;
