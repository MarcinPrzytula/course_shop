import { v4 as uuid } from 'uuid';
export const ADD_USER = 'ADD_USER';
export const CHANGE_LOGIN_STATUS =
  'CHANGE_LOGIN_STATUS';
export const BUY_COURSE = 'BUY_COURSE';
export const ADD_COURSE_TO_SHOPPING_CART =
  'ADD_COURSE_TO_SHOPPING_CART';
export const REMOVE_COURSE_FROM_SHOPPING_CART =
  'REMOVE_COURSE_FROM_SHOPPING_CART';
export const SELECT_COURSE = 'SELECT_COURSE';

export const addUser = ({
  id = uuid(),
  login,
  password,
  purchasedCourses = [],
  shoppingCart = [],
  logged = false,
  selectedCourse = '',
}) => ({
  type: ADD_USER,
  payload: {
    id,
    login,
    password,
    purchasedCourses,
    shoppingCart,
    logged,
    selectedCourse,
  },
});

export const changeLoginStatus = (
  id,
  logged
) => ({
  type: CHANGE_LOGIN_STATUS,
  payload: { id, logged },
});

export const buyCourse = courseId => ({
  type: BUY_COURSE,
  payload: courseId,
});

export const addCourseToShoppingCart =
  courseId => ({
    type: ADD_COURSE_TO_SHOPPING_CART,
    payload: courseId,
  });

export const removeCourseFromShoppingCart =
  courseId => ({
    type: REMOVE_COURSE_FROM_SHOPPING_CART,
    payload: courseId,
  });

export const selectCourse = courseId => ({
  type: SELECT_COURSE,
  payload: courseId,
});