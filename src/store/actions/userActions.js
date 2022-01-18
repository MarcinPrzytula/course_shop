import { v4 as uuid } from 'uuid';
export const ADD_USER = 'ADD_USER';
export const CHANGE_LOGIN_STATUS =
  'CHANGE_LOGIN_STATUS';
export const BUY_COURSE = 'BUY_COURSE';
export const ADD_COURSE_TO_SHOPPING_CART =
  'ADD_COURSE_TO_SHOPPING_CART';
export const REMOVE_COURSE_FROM_SHOPPING_CART =
  'REMOVE_COURSE_FROM_SHOPPING_CART';

export const addUser = ({
  id = uuid(),
  login,
  password,
  purchasedCourses = [],
  shoppingCart = [],
  logged = false,
}) => ({
  type: ADD_USER,
  payload: {
    id,
    login,
    password,
    purchasedCourses,
    shoppingCart,
    logged,
  },
});

export const changeLoginStatus = (
  id,
  logged
) => ({
  type: CHANGE_LOGIN_STATUS,
  payload: { id, logged },
});

export const buyCourse = (id, newCourse) => ({
  type: BUY_COURSE,
  payload: { id, newCourse },
});

export const addCourseToShoppingCart = (
  id,
  newCourse
) => ({
  type: ADD_COURSE_TO_SHOPPING_CART,
  payload: { id, newCourse },
});

export const removeCourseFromShoppingCart = (
  id,
  newCourse
) => ({
  type: REMOVE_COURSE_FROM_SHOPPING_CART,
  payload: { id, newCourse },
});
