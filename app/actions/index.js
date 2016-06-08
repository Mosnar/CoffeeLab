// *** Action Types ***
export const NAVIGATE = 'NAVIGATE';
export const NAV_PUSH = 'NAV_PUSH';
export const NAV_POP = 'NAV_POP';
export const NAV_JUMP_TO_KEY = 'NAV_JUMP_TO_KEY';
export const NAV_JUMP_TO_INDEX = 'NAV_JUMP_TO_INDEX';
export const NAV_RESET = 'NAV_RESET';


export function navigatePush(state) {
  state = typeof state === 'string' ? {key: state, title: state} : state;
  return {
    type: NAV_PUSH,
    state
  }
}

export function navigatePop() {
  return {
    type: NAV_POP
  }
}

export function navigateJumpToKey(key) {
  return {
    type: NAV_JUMP_TO_KEY,
    key
  }
}

export function navigateJumpToIndex(index) {
  return {
    type: NAV_JUMP_TO_INDEX,
    index
  }
}

export function navigateReset(children, index) {
  return {
    type: NAV_RESET,
    index,
    children
  };
}


export const DATA_BREW_METHODS_LOAD = 'DATA_BREW_METHODS_LOAD';
export const DATA_BREW_METHODS_LOAD_STARTED = 'DATA_BREW_METHODS_LOAD_STARTED';
export const DATA_BREW_METHODS_LOADED = 'DATA_BREW_METHODS_LOADED';

const _brewMethodsLoad = () => ({type: DATA_BREW_METHODS_LOAD});
const _brewMethodsLoadStarted = () => ({type: DATA_BREW_METHODS_LOAD_STARTED});
const _brewMethodsLoaded = (data) => ({type: DATA_BREW_METHODS_LOADED, brewMethods: data});

export const loadBrewMethods = () => (dispatch) => _loadBrewMethods(dispatch);


const _loadBrewMethods = (dispatch) => {
  dispatch(_brewMethodsLoadStarted());
  // TODO: get from server
  var BREW_METHOD_DATA = require('../data/BrewMethods.json');
  dispatch(_brewMethodsLoaded(BREW_METHOD_DATA));
};
