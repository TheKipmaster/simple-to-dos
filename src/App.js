import React from 'react';
import { View } from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import TodoList from './components/TodoList';
import { Header, Spinner } from './components/common';
import { store, persistor } from './configureStore';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<Spinner size="large" />} persistor={persistor}>
      <View style={{ flex: 1 }}>
        <Header title="To-Do List" />
        <TodoList />
      </View>
    </PersistGate>
  </Provider>
);

export default App;
