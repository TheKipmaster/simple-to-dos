import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import Router from './Router';

const App = () => (
  <Provider store={createStore(reducers)}>
    <Router />
  </Provider>
);

export default App;
