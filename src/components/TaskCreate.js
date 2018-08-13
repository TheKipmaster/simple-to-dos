import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CardItem, Button, Input } from './common';
import { taskCreate, taskUpdate } from '../actions';

class TaskCreate extends Component {
  onButtonPress() {
    const { newTask } = this.props;
    this.props.taskCreate(newTask);
  }

  onTextChange(value) {
    this.props.taskUpdate(value);
  }

  render() {
    return (
      <CardItem>
        <Input
          placeholder='Add a new to-do'
          onChangeText={this.onTextChange.bind(this)}
          value={this.props.newTask}
        />
        <Button onPress={this.onButtonPress.bind(this)}>
          Create
        </Button>
      </CardItem>
    );
  }
}

const mapStateToProps = ({ newTask }) => ({ newTask });

export default connect(mapStateToProps, { taskCreate, taskUpdate })(TaskCreate);
