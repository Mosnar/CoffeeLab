import {combineReducers} from 'redux'
import * as NavigationStateUtils from './NavigationStateUtils'

import * as Actions from '../actions'

const initialNavState = {
  key: 'MainNavigation',
  index: 0,
  children: [
    {key: 'explore', title: 'Explore'},
    {key: 'recipes', title: 'Recipes'},
    {key: 'recipeOverview', title: 'Recipe Overview'},
    {key: 'brewGuide', title: 'Brew Guide'},
    {key: 'settings', title: 'Settings'}
  ]
};

const initialBrewMethodListState = {
  brewMethodData: [],
  loadingBrewMethods: false,
  brewMethodsLoaded: false,
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

function brewMethodsState(state = initialBrewMethodListState, action) {
  switch (action.type) {
    case Actions.DATA_BREW_METHODS_LOAD_STARTED:
      return Object.assign({}, state, {
        ...state,
        loadingBrewMethods: true
      });
    case Actions.DATA_BREW_METHODS_LOADED:
      return Object.assign({}, state, {
        ...state,
        brewMethodData: action.brewMethods,
        loadingBrewMethods: false,
        brewMethodsLoaded: true
      });
    default:
      return state;
  }
}

const appReducers = combineReducers({
  navigationState,
  brewMethodsState
});

export default appReducers
module.exports = appReducers;
