import {
  CREATE,
  TOGGLE,
  DELETE
} from '../actions/types';

const INITIAL_STATE = {
  'Wash Dishes': false,
  'Mop Floors': false,
  'Walk Dog': true,
  'Clean Fridge': true,
  'Shop For Groceries': false,
  'Make Bed': true,
  'Take a Shower': true,
  'Take Out Trash': true,
  'Mow Lawn': false,
  'Cook Lunch': false,
  'Finish Homework': false,
  'Call Mom': false,
};

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
