// *** Action Types ***
export const NAVIGATE = 'NAVIGATE';
export const NAV_PUSH = 'NAV_PUSH';
export const NAV_POP = 'NAV_POP';
export const NAV_JUMP_TO_KEY = 'NAV_JUMP_TO_KEY';
export const NAV_JUMP_TO_INDEX = 'NAV_JUMP_TO_INDEX';
export const NAV_RESET = 'NAV_RESET';

export const DATA_BREW_METHODS_LOAD_STARTED = 'DATA_BREW_METHODS_LOAD_STARTED';
export const DATA_BREW_METHODS_LOADED = 'DATA_BREW_METHODS_LOADED';

export const loadBrewMethods = () => (dispatch) => _loadBrewMethods(dispatch);

const _loadBrewMethods = (dispatch) => {
  dispatch(_brewMethodsLoadStarted());
  // TODO: get from server
  var BREW_METHOD_DATA = require('../data/BrewMethods.json');
  dispatch(_brewMethodsLoaded(BREW_METHOD_DATA));
};

const _brewMethodsLoadStarted = () => ({type: DATA_BREW_METHODS_LOAD_STARTED});
const _brewMethodsLoaded = (data) => ({type: DATA_BREW_METHODS_LOADED, brewMethods: data});
