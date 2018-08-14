import React, { Component } from 'react';
import { CheckBox, Text } from 'react-native';

import { CardItem, Button, Input } from './common';

class TaskItem extends Component {
  state = { rename: false, name: this.props.name };

  onDeletePress(task) {
    this.props.taskDelete(task);
  }

  onRenamePress() {
    this.setState({ rename: !this.state.rename });
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
    return (<Text style={{ fontSize: 20 }}>{this.state.name}</Text>);
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
        {this.renderLabel(name)}
        <Button onPress={this.onRenamePress.bind(this)}>Rename</Button>
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
