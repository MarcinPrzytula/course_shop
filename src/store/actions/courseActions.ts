import axios from 'axios';
import { Dispatch } from 'react';

export const ADD_RATING = 'ADD_RATING';
export const FETCH_COURSES_DATA = 'FETCH_COURSES_DATA';

const URL = process.env.REACT_APP_API
  ? `${process.env.REACT_APP_API.trim()}api/courses`
  : 'http://localhost:3001/api/courses';

export interface fetchCourseDispatchType {
  type: typeof FETCH_COURSES_DATA;
  payload: {
    data: [];
  };
}

export const fetchCoursesData =
  () => async (dispatch: Dispatch<fetchCourseDispatchType>) => {
    const res = await axios({
      method: 'GET',
      withCredentials: true,
      url: URL,
    });

    dispatch({
      type: FETCH_COURSES_DATA,
      payload: res.data,
    });
  };

export const addRating = (
  courseId: string,
  userLogin: string,
  rating: number,
  comment: string
) => ({
  type: ADD_RATING,
  payload: { courseId, userLogin, rating, comment },
});
