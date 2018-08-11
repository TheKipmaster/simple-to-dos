import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import TodoList from './components/TodoList';

const RouterComponent = () => (
  <Router>
    <Scene key='root'>
      <Scene
        key='TodoList'
        component={TodoList}
        title='To-Do List'
        rightTitle=" +"
        onRight={() => {}}
        initial
      />
    </Scene>
  </Router>
);

export default RouterComponent;
