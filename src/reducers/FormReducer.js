import {
  UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  task: '',
  completed: false
};

export default (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      };
    default:
      return state;
  }
};
