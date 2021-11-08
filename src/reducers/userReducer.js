import { ADD } from '../actions/userActions.js';

import { v4 as uuid } from 'uuid';

export const userReducer = (
  state = [
    {
      id: uuid(),
      userLogin: 'admin',
      userPassword: 'admin',
      courses: [],
    },
  ],
  action
) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];

    default:
      console.warn(
        `Nie mamy akcji typu ${action.type}`
      );

      return state;
  }
};
