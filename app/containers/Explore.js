'use strict';

import React, {Component} from 'react';

import * as actions from '../actions';

import {bindActionCreators} from 'redux';

import { connect } from 'react-redux';
var BrewMethodList = require('../components/BrewMethodList/BrewMethodList');

class Explore extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {state, actions} = this.props;
    return (
      <BrewMethodList
        {...state}
        {...actions}
      />
    )
  }
}



const conn = connect(state => ({
    state: state.brewMethodsState
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Explore);

module.exports = conn;
