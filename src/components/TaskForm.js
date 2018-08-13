import React, { Component } from 'react';
import { View, CheckBox, Text } from 'react-native';
import { connect } from 'react-redux';
import { taskUpdate } from '../actions';
import { CardItem, Input } from './common';

class TaskForm extends Component {
  onNameChange(value) {
    this.props.taskUpdate({ prop: 'task', value });
  }

  onStatusChange(value) {
    this.props.taskUpdate({ prop: 'completed', value });
  }

  render() {
    return (
      <View>
        <CardItem>
          <Input
            label='Task Name'
            placeholder='Wash Dishes'
            onChangeText={this.onNameChange.bind(this)}
            value={this.props.task}
          />
        </CardItem>

        <CardItem>
          <Text>Completed</Text>
          <CheckBox
            onValueChange={this.onStatusChange.bind(this)}
            value={this.props.completed}
          />
        </CardItem>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { task, completed } = state.form;

  return { task, completed };
};

export default connect(mapStateToProps, { taskUpdate })(TaskForm);
