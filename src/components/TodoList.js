import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

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
        data={this.props.todos}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => item + index}
      />
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const { todos } = state;
  return ({ todos });
};

export default connect(mapStateToProps)(TodoList);
