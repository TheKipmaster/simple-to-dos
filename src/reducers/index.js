import { combineReducers } from 'redux';
import TodoReducer from './TodoReducer';
import FormReducer from './FormReducer';

export default combineReducers({
  todos: TodoReducer,
  form: FormReducer
});
