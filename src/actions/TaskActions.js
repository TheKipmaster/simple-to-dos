import {
  UPDATE,
  CREATE
} from './types';

export const taskUpdate = ({ prop, value }) => ({
  type: UPDATE,
  payload: { prop, value }
});

export const taskCreate = ({ prop, value }) => ({
  type: CREATE,
  payload: { prop, value }
});
