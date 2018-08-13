import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import TodoList from './components/TodoList';
import TaskCreate from './components/TaskCreate';

const RouterComponent = () => (
  <Router>
    <Scene key='root'>
      <Scene
        key='todoList'
        component={TodoList}
        title='To-Do List'
        onRight={() => { Actions.taksCreate(); }}
        initial
      />
      <Scene
        key='taksCreate'
        component={TaskCreate}
        title='New Task'
      />
    </Scene>
  </Router>
);

export default RouterComponent;
