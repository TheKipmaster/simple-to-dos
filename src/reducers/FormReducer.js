import {
  UPDATE,
  CREATE
} from '../actions/types';

const INITIAL_STATE = '';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE:
      return action.payload;
    case CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
