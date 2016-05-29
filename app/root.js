import React, {
  Component,
} from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// import reducers from './reducers';
import App from './containers/App';

// const createStoreWithMW = applyMiddleware(thunk)(createStore)
// const store = createStoreWithMW(reducers);

class Root extends Component {
  render() {
    return (
      // <Provider store={store}>
        <App />
      // </Provider>
    );
  }
}

module.exports = Root;
