import _ from 'underscore';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';

import TaskCreate from './TaskCreate';
import TaskItem from './TaskItem';
import { taskToggle, taskDelete, taskRename } from '../actions';

class TodoList extends Component {

  renderTodos() {
    const todoList = _.mapObject(this.props.todos, (completed, name) => (
      <TaskItem
        key={name}
        completed={completed}
        name={name}
        taskDelete={this.props.taskDelete}
        taskToggle={this.props.taskToggle}
        taskRename={this.props.taskRename}
      />
    ));
    return _.values(todoList);
  }

  render() {
    return (
      <ScrollView>
        <TaskCreate />
        {this.renderTodos()}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  const { todos } = state;
  console.log(state);
  return ({ todos });
};

export default connect(mapStateToProps, { taskToggle, taskDelete, taskRename })(TodoList);
