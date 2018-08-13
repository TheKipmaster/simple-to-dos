import React, { Component } from 'react';
import { CheckBox, Text } from 'react-native';

import { CardItem, Button } from './common';

class TaskItem extends Component {
  onDeletePress(task) {
    this.props.taskDelete(task);
  }

  onRenamePress(task) {
    console.log(task);
  }

  render() {
    const { name, completed, taskToggle } = this.props;
    return (
      <CardItem key={name}>
        <CheckBox
          onValueChange={() => taskToggle(name)}
          value={completed}
          style={styles.checkboxStyle}
        />
        <Text style={{ fontSize: 20 }}>{name}</Text>
        <Button onPress={this.onRenamePress.bind(this, name)}>Rename</Button>
        <Button onPress={this.onDeletePress.bind(this, name)}>Delete</Button>
      </CardItem>
    );
  }
}

const styles = {
  checkboxStyle: {
    marginRight: 5,
  }
};

export default TaskItem;
