import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import rootReducer from "../reducers";

var {persistStore, autoRehydrate} = require('redux-persist');
var {AsyncStorage} = require('react-native');


var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

var loggerMiddleware = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true
});

var createCoffeeStore = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);

function configureStore(onComplete: ?() => void) {
  const store = autoRehydrate()(createCoffeeStore)(rootReducer);
  persistStore(store, {storage: AsyncStorage}, onComplete);
  if (isDebuggingInChrome) {
    window.store = store;
  }
  return store;
}

export default configureStore;
module.exports = configureStore;
