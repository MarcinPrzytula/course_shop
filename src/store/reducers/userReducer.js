import {
  ADD,
  EDIT,
  ADD_COURSE,
} from '../actions/userActions.js';

import { v4 as uuid } from 'uuid';

const edit = (state, action) => {
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

const addCourse = (state, action) => {
  const { newCourse } = action.payload;

  const loggedUser = state.find(
    user => user.logged === true
  );
  const checkIfTheCourseAlreadyThere =
    loggedUser.courses.find(
      course => course.id === newCourse.id
    );

  return state.map(currentStateElement => {
    if (
      currentStateElement.id !==
        action.payload.id ||
      checkIfTheCourseAlreadyThere
    ) {
      return currentStateElement;
    }

    const {
      id,
      userLogin,
      userPassword,
      logged,
    } = currentStateElement;
    return {
      id,
      userLogin,
      userPassword,
      courses: [...loggedUser.courses, newCourse],
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
    case ADD_COURSE:
      return addCourse(state, action);
    default:
      console.warn(
        `Nie mamy akcji typu ${action.type}`
      );

      return state;
  }
};
