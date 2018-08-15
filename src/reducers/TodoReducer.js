import {
  CREATE,
  TOGGLE,
  DELETE,
  RENAME
} from '../actions/types';

const INITIAL_STATE = {
  // 'Call Mom': false,
  // 'Cook Lunch': false,
  // 'Finish Homework': false,
  // 'Make Bed': true,
  // 'Mop Floors': false,
  // 'Mow Lawn': false,
  // 'Clean Fridge': true,
  // 'Shop For Groceries': false,
  // 'Take Out Trash': true,
  // 'Take a Shower': true,
  // 'Walk Dog': true,
  // 'Wash Dishes': false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CREATE:
      return {
        [payload]: false,
        ...state,
      };
    case TOGGLE: {
      // cria novo objeto igual ao estado atual
      const newState = Object.assign({}, state);
      newState[payload] = !state[payload]; // troca valor do booleano
      return newState;
    }
    case DELETE: {
      // cria novo objeto igual ao estado atual
      const newState = Object.assign({}, state);
      delete newState[payload]; // remove propriedade desejada
      return newState;
    }
    case RENAME: {
      const renameProp = (oldProp, newProp, { [oldProp]: oldValue, ...others }) => ({
        [newProp]: oldValue,
        ...others
      });

      return renameProp(payload.oldName, payload.newName, state);
    }
    default:
      return state;
  }
};
