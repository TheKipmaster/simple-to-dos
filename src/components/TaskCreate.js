import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import TaskForm from './TaskForm';
import { Card, CardItem, Button } from './common';
import { taskCreate } from '../actions';

class TaskCreate extends Component {
  onButtonPress() {
    const { task, completed } = this.props;

    this.props.taskCreate({ task, completed });
    console.log(this.props);
  }

  render() {
    return (
      <View>
        <Card>
          <TaskForm {...this.props} />
          <CardItem>
            <Button onPress={this.onButtonPress.bind(this)}>
              Create
            </Button>
          </CardItem>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = ({ form }) => {
  const { task, completed } = form;

  return ({ task, completed });
};

export default connect(mapStateToProps, { taskCreate })(TaskCreate);
