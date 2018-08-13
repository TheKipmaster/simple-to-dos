import _ from 'underscore';
import React, { Component } from 'react';
import { Text, ScrollView, CheckBox } from 'react-native';
import { connect } from 'react-redux';

import { CardItem, Button } from './common';
import TaskCreate from './TaskCreate';
import { taskToggle, taskDelete } from '../actions';

class TodoList extends Component {
  onButtonPress(task) {
    this.props.taskDelete(task);
  }

  renderTodos() {
    const todos = _.mapObject(this.props.todos, (completed, name) => (
      <CardItem key={name}>
        <CheckBox
          onValueChange={() => this.props.taskToggle(name)}
          value={completed}
          style={styles.checkboxStyle}
        />
        <Text style={{ fontSize: 20 }}>{name}</Text>
        <Button onPress={this.onButtonPress.bind(this, name)}>Delete</Button>
      </CardItem>
    ));
    return _.values(todos);
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
  return ({ todos });
};

const styles = {
  checkboxStyle: {
    marginRight: 5,
  }
};

export default connect(mapStateToProps, { taskToggle, taskDelete })(TodoList);
