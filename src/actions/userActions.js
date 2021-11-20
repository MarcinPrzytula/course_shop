import { v4 as uuid } from 'uuid';
export const ADD = 'ADD';
export const EDIT = 'EDIT';

export const addUser = ({
  id = uuid(),
  userLogin,
  userPassword,
  courses = [],
  logged = false,
}) => ({
  type: ADD,
  payload: {
    id,
    userLogin,
    userPassword,
    courses,
    logged,
  },
});

export const editUser = (id, logged) => ({
  type: EDIT,
  payload: { id, logged },
});
