'use strict';

import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  NavigationExperimental
} from 'react-native';

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils
} = NavigationExperimental

import EStyleSheet from 'react-native-extended-stylesheet';

// Base stylesheet
import theme from '../styles/theme';

var router = require('../router');

function createReducer(initialState) {
  return (currentState = initialState, action) => {
    switch (action.type) {
      case 'push':
        return NavigationStateUtils.push(currentState, {key: action.key});
      case 'pop':
        return currentState.index > 0 ?
          NavigationStateUtils.pop(currentState) :
          currentState;
      default:
        return currentState;
    }
  }
}
const NavReducer = createReducer({
  index: 0,
  key: 'App',
  children: [{key: 'Home'}]
});


class App extends Component {
  constructor(props) {
    super(props);
    EStyleSheet.build(theme);
    this.state = {
      navState: NavReducer(undefined, {})
    }
  }


  _handleAction(action) {
    const newState = NavReducer(this.state.navState, action);
    if (newState === this.state.navState) {
      return false;
    }
    this.setState({
      navState: newState
    });
    return true;
  }

  handleBackAction() {
    return this._handleAction({type: 'pop'});
  }

  _renderRoute (key) {
    if (key === 'Home') {
      return <Home
        onPress={this._handleAction.bind(this,
             { type: 'push', key: 'About' })} />
    }
    if (key === 'About') {
      return <About
        goBack={this.handleBackAction.bind(this)}
        onPress={this._handleAction.bind(this,
            { type: 'push', key: 'Contact' })} />
    }
    if (key === 'Contact') {
      return <Contact
        goBack={ this.handleBackAction.bind(this)} />
    }
  }

  _renderScene(props) {
    const ComponentToRender = this._renderRoute(props.scene.navigationState.key)
    return (
      <ScrollView style={styles.scrollView}>
        {ComponentToRender}
      </ScrollView>
    );
  }
  render() {
    return (
      <NavigationCardStack
        navigationState={this.state.navState}
        onNavigate={this._handleAction.bind(this)}
        renderScene={this._renderScene.bind(this)} />
    )
  }


  render() {
    let navigationBarHeight = 64;

    return (
      <ExNavigator
        initialRoute={router.getExploreRoute()}
        showNavigationBar={true}
        style={{ flex: 1 }}
        sceneStyle={{ paddingTop: navigationBarHeight }}
      />
    );
  }
}

module.exports = App;
