import React from 'react';
import { View } from 'react-native';

import { Header } from './components/common';
import TodoList from './components/TodoList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header title="To-Do List" />
    <TodoList />
  </View>
);

export default App;
