import {combineReducers} from 'redux'
import * as NavigationStateUtils from './NavigationStateUtils'

import * as Actions from '../actions'

const initialNavState = {
  key: 'MainNavigation',
  index: 0,
  children: [
    {key: 'explore', title: 'Explore'}
  ]
};

const initialBrewMethodListState = {
  brewMethods: []
};

function navigationState(state = initialNavState, action) {
  switch (action.type) {
    case Actions.NAV_PUSH:
      if (state.children[state.index].key === (action.state && action.state.key)) return state;
      return NavigationStateUtils.push(state, action.state);

    case Actions.NAV_POP:
      if (state.index === 0 || state.children.length === 1) return state;
      return NavigationStateUtils.pop(state);

    case Actions.NAV_JUMP_TO_KEY:
      return NavigationStateUtils.jumpTo(state, action.key);

    case Actions.NAV_JUMP_TO_INDEX:
      return NavigationStateUtils.jumpToIndex(state, action.index);

    case Actions.NAV_RESET:
      return {
        ...state,
        index: action.index,
        children: action.children
      };

    default:
      return state
  }
}

function brewMethodListState(state = initialBrewMethodListState, action) {
  switch(action.type) {
    case Actions.DATA_LOADED:
          break;
    case Actions.DATA_BREW_METHODS_ADD:
          break;
    case Actions.DATA_BREW_METHODS_LOADED:
          break;
    case Actions.DATA_BREW_METHODS_REMOVE:
          break;
  }
}

const appReducers = combineReducers({
  navigationState
});

export default appReducers
module.exports = appReducers;
