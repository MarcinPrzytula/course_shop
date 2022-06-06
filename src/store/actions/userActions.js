import axios from 'axios';

export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const ADD_USER = 'ADD_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const BUY_COURSE = 'BUY_COURSE';
export const ADD_COURSE_TO_SHOPPING_CART = 'ADD_COURSE_TO_SHOPPING_CART';
export const REMOVE_COURSE_FROM_SHOPPING_CART =
  'REMOVE_COURSE_FROM_SHOPPING_CART';
export const SELECT_COURSE = 'SELECT_COURSE';

export const fetchUserData = () => async dispatch => {
  const URL = process.env.REACT_APP_API
    ? `${process.env.REACT_APP_API.trim()}api/user`
    : 'http://localhost:3001/api/user';

  const res = await axios({
    method: 'GET',
    withCredentials: true,
    url: URL,
  });
  dispatch({
    type: FETCH_USER_DATA,
    payload: res.data,
  });
};

export const addUser = (login, password) => async () => {
  const URL = process.env.REACT_APP_API
    ? `${process.env.REACT_APP_API.trim()}api/register`
    : `http://localhost:3001/api/register`;

  const res = await axios({
    method: 'POST',
    data: {
      username: login,
      password: password,
    },
    withCredentials: true,
    url: URL,
  });

  return res;
};

export const loginUser = (login, password) => async dispatch => {
  const URL = process.env.REACT_APP_API
    ? `${process.env.REACT_APP_API.trim()}api/login`
    : `http://localhost:3001/api/login`;

  const res = await axios({
    method: 'POST',
    data: {
      username: login,
      password: password,
    },
    withCredentials: true,
    url: URL,
  });

  if (res.data !== 'Invalid username or password') {
    dispatch({
      type: LOGIN_USER,
      payload: res.data,
    });
  }

  return res;
};

export const buyCourse = courseId => ({
  type: BUY_COURSE,
  payload: courseId,
});

export const addCourseToShoppingCart = courseId => ({
  type: ADD_COURSE_TO_SHOPPING_CART,
  payload: courseId,
});

export const removeCourseFromShoppingCart = courseId => ({
  type: REMOVE_COURSE_FROM_SHOPPING_CART,
  payload: courseId,
});

export const selectCourse = courseId => ({
  type: SELECT_COURSE,
  payload: courseId,
});
