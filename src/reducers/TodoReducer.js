import { Actions } from 'react-native-router-flux';
import {
  CREATE,
} from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE:
      Actions.pop();
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
};
