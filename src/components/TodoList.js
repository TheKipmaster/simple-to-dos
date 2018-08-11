import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';

import { CardItem } from './common';

class TodoList extends Component {
  renderItem({ item }) {
    return (
      <CardItem>
        <Text style={{ fontSize: 20 }}>{item.task}</Text>
      </CardItem>
    );
  }

  render() {
    return (
      <FlatList
        data={[{ task: 'Fazer fachina' }, { task: 'Regar as plantas' }]}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => item + index}
      />
    );
  }
}

export default TodoList;
