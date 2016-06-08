'use strict';

import React, {
  Component,
  PropTypes
} from 'react';

import {
  Text,
  View,
  NavigationExperimental
} from 'react-native';

import {bindActionCreators} from 'redux';

import {connect} from 'react-redux';

import * as actions from '../actions';

const {
  AnimatedView: NavigationAnimatedView,
  Card: NavigationCard,
  Header: NavigationHeader,
  RootContainer: NavigationRootContainer
} = NavigationExperimental;


import EStyleSheet from 'react-native-extended-stylesheet';

// Base stylesheet
import theme from '../styles/theme';

var Explore = require('./Explore');

class App extends Component {
  constructor(props) {
    super(props);
    EStyleSheet.build(theme);

    this._renderScene = this._renderScene.bind(this);
  }

  render() {
    let {navigationState, onNavigate} = this.props;

    return (
      <NavigationAnimatedView
        navigationState={navigationState}
        style={theme.outerContainer}
        onNavigate={onNavigate}
        renderOverlay={props => (
          <NavigationHeader
            {...props}
            renderTitleComponent={props => {
                const title = props.scene.navigationState.title;
                return <NavigationHeader.Title>{title}</NavigationHeader.Title>
              }}
            />
          )}
        renderScene={props => (
          <NavigationCard
            {...props}
            style={props.scene.navigationState.key === 'Modal' ?
                    NavigationCard.CardStackStyleInterpolator.forVertical(props) :
                    undefined
                    }
                    // By default a user can swipe back to pop from the stack. Disable this for modals.
              // Just like for style interpolators, returning undefined lets NavigationCard override it.
              panHandlers={props.scene.navigationState.key === 'Modal' ? null : undefined }
              renderScene={this._renderScene}
              key={props.scene.navigationState.key}
          />
        )}
      />
    )
  }

  _renderScene({scene}) {
    const {navigationState} = scene;

    switch (navigationState.key) {
      case 'Explore':
        return <Explore />;
      default:
        return <Explore />;
    }
  }

}

App.propTypes = {
  navigationState: PropTypes.object,
  onNavigate: PropTypes.func.isRequired
};


export default connect(
  state => ({
    navigationState: state.navigationState,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
    onNavigate: (action) => {
      // Two types of actions are likely to be passed, both representing "back"
      // style actions. Check if a type has been indicated, and try to match it.
      if (action.type && (
        action.type === NavigationRootContainer.getBackAction().type ||
        action.type === NavigationCard.CardStackPanResponder.Actions.BACK.type)
      ) {
        dispatch(navigatePop())
      } else {
        // Currently unused by NavigationExperimental (only passes back actions),
        // but could potentially be used by custom components.
        dispatch(navigatePush(action))
      }
    }
  })
)(App);
