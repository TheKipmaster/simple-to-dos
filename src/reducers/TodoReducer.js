import {
  CREATE,
  TOGGLE,
  DELETE
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
    case DELETE:
      return Object.assign(
        {},
        ...Object.entries(state)
           .filter(([k]) => k !== action.payload)
           .map(([k, v]) => ({ [k]: v }))
      );
    default:
      return state;
  }
};
