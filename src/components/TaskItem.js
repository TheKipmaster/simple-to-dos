import React, { Component } from 'react';
import { CheckBox, Text } from 'react-native';

import { CardItem, Button, Input } from './common';

class TaskItem extends Component {
  state = { rename: false, name: this.props.name };

  onDeletePress(task) {
    this.props.taskDelete(task);
  }

  onRenamePress(name) {
    this.setState({ rename: !this.state.rename });
    if (this.state.rename) {
      this.props.taskRename({ newName: this.state.name, oldName: name });
    }
  }

  handleRename(value) {
    this.setState(() => ({
      name: value,
    }));
  }

  renderLabel(name) {
    if (this.state.rename) {
      return (
        <Input
          placeholder={name}
          value={this.state.name}
          onChangeText={this.handleRename.bind(this)}
        />
      );
    }
    return (<Text style={{ fontSize: 20 }}>{name}</Text>);
  }

  render() {
    const { name, completed, taskToggle } = this.props;
    return (
      <CardItem>
        <CheckBox
          onValueChange={() => taskToggle(name)}
          value={completed}
          style={styles.checkboxStyle}
        />
        {this.renderLabel(name)}
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
