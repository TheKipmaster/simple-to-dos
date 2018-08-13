import React from 'react';
import { View } from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TodoList from './components/TodoList';
import { Header } from './components/common';
import reducers from './reducers';

const App = () => (
  <Provider store={createStore(reducers)}>
    <View style={{ flex: 1 }}>
      <Header title="To-Do List" />
      <TodoList />
    </View>
  </Provider>
);

export default App;
