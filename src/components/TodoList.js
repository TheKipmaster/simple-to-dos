import React, { Component } from 'react';
import { Text, FlatList, CheckBox } from 'react-native';
import { connect } from 'react-redux';

import { CardItem } from './common';
import TaskCreate from './TaskCreate';
import { taskToggle } from '../actions';

class TodoList extends Component {
  renderItem({ item }) {
    return (
      <CardItem>
        <CheckBox
          onValueChange={() => this.props.taskToggle(item)}
          value={item.completed}
          style={styles.checkboxStyle}
        />
        <Text style={{ fontSize: 20 }}>{item.name}</Text>
      </CardItem>
    );
  }

  render() {
    return (
      <FlatList
        ListHeaderComponent={TaskCreate}
        data={this.props.todos}
        renderItem={this.renderItem.bind(this)}
        keyExtractor={(item, index) => item + index}
      />
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

export default connect(mapStateToProps, { taskToggle })(TodoList);
