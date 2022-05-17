import axios from 'axios';

export const ADD_RATING = 'ADD_RATING';
export const FETCH_COURSES_DATA = 'FETCH_COURSES_DATA';

const URL = process.env.REACT_APP_API
  ? `${process.env.REACT_APP_API.trim()}api/courses`
  : 'http://localhost:3001/api/courses';

export const fetchCoursesData = () => async dispatch => {
  const res = await axios({
    method: 'GET',
    withCredentials: true,
    url: URL,
  });
  dispatch({
    type: FETCH_COURSES_DATA,
    payload: res.data,
  });
  console.log(res.data);
};

export const addRating = (
  courseId,
  userLogin,
  rating,
  comment
) => ({
  type: ADD_RATING,
  payload: { courseId, userLogin, rating, comment },
});
