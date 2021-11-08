import { v4 as uuid } from 'uuid';
export const ADD = 'ADD';

export const addUser = ({
  id = uuid(),
  userLogin,
  userPassword,
  courses = [],
}) => ({
  type: ADD,
  payload: {
    id,
    userLogin,
    userPassword,
    courses,
  },
});
