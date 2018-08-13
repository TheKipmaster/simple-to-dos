import React, { Component } from 'react';
import { View } from 'react-native';

import TaskForm from './TaskForm';
import { Card, CardItem, Button } from './common';

class TaskCreate extends Component {
  // onButtonPress() {
  //   const { name } = this.props;
  //
  //   this.props.taskCreate({ name });
  // }

  render() {
    return (
      <View>
        <Card>
          <TaskForm {...this.props} />
          <CardItem>
            <Button onPress={() => {}}>
              Create
            </Button>
          </CardItem>
        </Card>
      </View>
    );
  }
}

export default TaskCreate;
