import {
  ADD_USER,
  CHANGE_LOGIN_STATUS,
  BUY_COURSE,
  ADD_COURSE_TO_SHOPPING_CART,
  REMOVE_COURSE_FROM_SHOPPING_CART,
} from '../actions/userActions.js';

import { v4 as uuid } from 'uuid';

const changeLoginStatus = (state, action) => {
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
      login,
      password,
      purchasedCourses,
      shoppingCart,
    } = currentStateElement;
    return {
      id,
      login,
      password,
      purchasedCourses,
      shoppingCart,
      logged,
    };
  });
};

const buyCourse = (state, action) => {
  const { newCourse } = action.payload;
  const loggedUser = state.find(
    user => user.logged === true
  );
  const checkIfTheCourseAlreadyThere =
    loggedUser.purchasedCourses.find(
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
      login,
      password,
      logged,
      shoppingCart,
    } = currentStateElement;
    return {
      id,
      login,
      password,
      purchasedCourses: [
        ...loggedUser.courses,
        ...newCourse,
      ],
      shoppingCart,
      logged,
    };
  });
};

const addCourseToShoppingCart = (
  state,
  action
) => {
  const loggedUser = state.find(
    user => user.logged === true
  );
  const checkIfTheCourseAlreadyThere =
    loggedUser.shoppingCart.find(
      courseId => courseId === action.payload
    );

  return state.map(currentStateElement => {
    if (
      currentStateElement.id !== loggedUser.id
    ) {
      return currentStateElement;
    } else if (checkIfTheCourseAlreadyThere) {
      return currentStateElement;
    }

    const {
      id,
      login,
      password,
      logged,
      purchasedCourses,
    } = currentStateElement;
    return {
      id,
      login,
      password,
      purchasedCourses,
      shoppingCart: [
        ...loggedUser.shoppingCart,
        action.payload,
      ],
      logged,
    };
  });
};

const removeCourseFromShoppingCart = (
  state,
  action
) => {};

export const userReducer = (
  state = [
    {
      id: uuid(),
      login: 'admin',
      password: 'admin',
      purchasedCourses: [],
      shoppingCart: [],
      logged: false,
    },
  ],
  action
) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    case CHANGE_LOGIN_STATUS:
      return changeLoginStatus(state, action);
    case BUY_COURSE:
      return buyCourse(state, action);
    case ADD_COURSE_TO_SHOPPING_CART:
      return addCourseToShoppingCart(
        state,
        action
      );
    case REMOVE_COURSE_FROM_SHOPPING_CART:
      return removeCourseFromShoppingCart(
        state,
        action
      );
    default:
      console.warn(
        `Nie mamy akcji typu ${action.type}`
      );

      return state;
  }
};
