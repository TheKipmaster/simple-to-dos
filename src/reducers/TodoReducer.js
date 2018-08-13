import {
  CREATE,
  TOGGLE
} from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE:
      return [
        ...state,
        action.payload
      ];
    case TOGGLE: {
      let array = state.find(task => task.name !== action.payload.name);
      if (array === undefined) {
        array = [];
      }
      return [
        ...array,
        { name: action.payload.name, completed: !action.payload.completed }
      ];
    }
    default:
      return state;
  }
};
