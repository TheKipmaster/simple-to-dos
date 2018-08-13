import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { CardItem } from './common';
import TaskCreate from './TaskCreate';

class TodoList extends Component {
  renderItem({ item }) {
    return (
      <CardItem>
        <Text style={{ fontSize: 20 }}>{item.name}</Text>
      </CardItem>
    );
  }

  render() {
    return (
      <FlatList
        ListHeaderComponent={TaskCreate}
        data={this.props.todos}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => item + index}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { todos } = state;
  return ({ todos });
};

export default connect(mapStateToProps)(TodoList);
