import {
  UPDATE,
  CREATE
} from './types';

export const taskUpdate = (payload) => ({
  type: UPDATE,
  payload
});

export const taskCreate = (payload) => ({
  type: CREATE,
  payload
});
