import {
  ADD_RATING,
  FETCH_COURSES_DATA,
} from '../actions/courseActions.js';

import axios from 'axios';

const editDbCourse = async values => {
  const URL = process.env.REACT_APP_API
    ? `${process.env.REACT_APP_API.trim()}api/course/${
        values._id
      }`
    : `http://localhost:3001/api/course/${values._id}`;

  await axios.put(URL, values);
};

const addRating = (state, action) => {
  return state.map(currentStateElement => {
    if (
      currentStateElement._id !== action.payload.courseId
    ) {
      return currentStateElement;
    }

    const userHasAlreadyRated =
      currentStateElement.rating.filter(
        item => item.userLogin === action.payload.userLogin
      );
    console.log(userHasAlreadyRated);
    if (userHasAlreadyRated.length > 0)
      return currentStateElement;

    const updateCourse = { ...currentStateElement };

    const newRating = {
      userLogin: action.payload.userLogin,
      rating: action.payload.rating,
      comment: action.payload.comment.formValue,
    };
    updateCourse.rating = [
      ...currentStateElement.rating,
      newRating,
    ];
    editDbCourse(updateCourse);
    return updateCourse;
  });
};

const fetchCoursesData = (state, action) => {
  //   console.log(action.payload);
  return action.payload;
};

export const courseReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_RATING:
      return addRating(state, action);
    case FETCH_COURSES_DATA:
      return fetchCoursesData(state, action);
    default:
      return state;
  }
};
