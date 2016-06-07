'use strict';

import React, {Component} from 'react';

import * as actions from '../actions';

import {bindActionCreators} from 'redux';

import { connect } from 'react-redux';
var BrewMethodList = require('../components/BrewMethodList/BrewMethodList');

class Explore extends Component {
  
  render() {
    const {state, actions} = this.props;
    return (
      <BrewMethodList
        {...actions}
      />
    )
  }
}



module.exports = connect(state => ({
    state: state.brewMethodsState
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Explore);

