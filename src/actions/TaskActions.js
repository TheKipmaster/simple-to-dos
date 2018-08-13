import {
  UPDATE,
  CREATE
} from './types';

export const taskUpdate = ({ prop, value }) => ({
  type: UPDATE,
  payload: { prop, value }
});

export const taskCreate = (payload) => {
  console.log(payload);
  return ({
    type: CREATE,
    payload
  });
};
