'use strict';

import React, {Component} from 'react';

import { connect } from 'react-redux';
var BrewMethodList = require('../components/BrewMethodList/BrewMethodList');

class Explore extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {state, actions} = this.props;
    return (
      <BrewMethodList />
    )
  }
}



const conn = connect(state => ({
  }),
  (dispatch) => ({
  })
)(Explore);

module.exports = conn;
