'use strict';

import {connect} from 'react-redux'

var BrewMethodList = require('../components/BrewMethodList/BrewMethodList');

const mapStateToProps = (state) => {
  return {
    brewMethods: state.brewMethods
  }
};

const mapDispatchToProps = (dispatch) => {
  return {}
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrewMethodList);
