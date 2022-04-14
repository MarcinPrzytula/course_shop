import axios from 'axios';

export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const BUY_COURSE = 'BUY_COURSE';
export const ADD_COURSE_TO_SHOPPING_CART =
  'ADD_COURSE_TO_SHOPPING_CART';
export const REMOVE_COURSE_FROM_SHOPPING_CART =
  'REMOVE_COURSE_FROM_SHOPPING_CART';
export const SELECT_COURSE = 'SELECT_COURSE';
// console.log(process.env.REACT_APP_API);

const URL = process.env.REACT_APP_API
  ? `${process.env.REACT_APP_API.trim()}api/user`
  : 'http://localhost:3001/api/user';

export const fetchUserData = () => async dispatch => {
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
// export const fetchUserData = data => ({
//   type: FETCH_USER_DATA,
//   payload: data,
// });

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
