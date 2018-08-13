import {
  CREATE,
  TOGGLE,
} from '../actions/types';

const INITIAL_STATE = { 'Wash Dishes': false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        [action.payload]: false
      };
    case TOGGLE: {
      return {
        ...state,
        [action.payload]: !state[action.payload]
      };
    }
    default:
      return state;
  }
};
