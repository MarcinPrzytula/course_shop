import axios from 'axios';
import { Dispatch } from 'react';

export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const ADD_USER = 'ADD_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const BUY_COURSE = 'BUY_COURSE';
export const ADD_COURSE_TO_SHOPPING_CART = 'ADD_COURSE_TO_SHOPPING_CART';
export const REMOVE_COURSE_FROM_SHOPPING_CART =
  'REMOVE_COURSE_FROM_SHOPPING_CART';
export const SELECT_COURSE = 'SELECT_COURSE';

interface fetchUserDispatchType {
  type: typeof FETCH_USER_DATA;
  payload: {
    data: [];
  };
}
interface loginUserDispatchType {
  type: typeof LOGIN_USER;
  payload: {
    data: {};
  };
}

export const fetchUserData =
  () => async (dispatch: Dispatch<fetchUserDispatchType>) => {
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

export const addUser = (login: string, password: string) => async () => {
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

export const loginUser =
  (login: string, password: string) =>
  async (dispatch: Dispatch<loginUserDispatchType>) => {
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

export const buyCourse = (courseId: String) => ({
  type: BUY_COURSE,
  payload: courseId,
});

export const addCourseToShoppingCart = (courseId: String) => ({
  type: ADD_COURSE_TO_SHOPPING_CART,
  payload: courseId,
});

export const removeCourseFromShoppingCart = (courseId: String) => ({
  type: REMOVE_COURSE_FROM_SHOPPING_CART,
  payload: courseId,
});

export const selectCourse = (courseId: String) => ({
  type: SELECT_COURSE,
  payload: courseId,
});
