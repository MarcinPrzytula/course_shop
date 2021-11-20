import {
  ADD,
  EDIT,
} from '../actions/userActions.js';

import { v4 as uuid } from 'uuid';

const edit = (state, action) => {
  console.log(action.payload);
  return state.map(currentStateElement => {
    if (
      currentStateElement.id !== action.payload.id
    ) {
      currentStateElement.logged = false;
      return currentStateElement;
    }

    const { logged } = action.payload;
    const {
      id,
      userLogin,
      userPassword,
      courses,
    } = currentStateElement;
    return {
      id,
      userLogin,
      userPassword,
      courses,
      logged,
    };
  });
};

export const userReducer = (
  state = [
    {
      id: uuid(),
      userLogin: 'admin',
      userPassword: 'admin',
      courses: [],
      logged: false,
    },
  ],
  action
) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case EDIT:
      return edit(state, action);

    default:
      console.warn(
        `Nie mamy akcji typu ${action.type}`
      );

      return state;
  }
};
