import {
  UPDATE,
  CREATE,
  TOGGLE,
  DELETE,
  RENAME
} from './types';

export const taskUpdate = (payload) => ({
  type: UPDATE,
  payload
});

export const taskCreate = (payload) => ({
  type: CREATE,
  payload
});

export const taskToggle = (payload) => ({
  type: TOGGLE,
  payload
});

export const taskDelete = (payload) => ({
  type: DELETE,
  payload
});

export const taskRename = (payload) => ({
  type: RENAME,
  payload
});
