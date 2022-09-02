import { ADD_RATING, FETCH_COURSES_DATA } from '../actions/courseActions';

import axios from 'axios';

interface CourseI {
  _id: string;
  title: string;
  authors: string;
  category: string;
  price: string;
  rating: Array<{ userLogin: string; rating: number; comment: string }>;
}

const editDbCourse = async (updateCourse: CourseI) => {
  const URL = process.env.REACT_APP_API
    ? `${process.env.REACT_APP_API.trim()}api/course/${updateCourse._id}`
    : `http://localhost:3001/api/course/${updateCourse._id}`;

  await axios.put(URL, updateCourse);
};

interface CommentI {
  userLogin: string;
  formValue: string;
}
interface RatingActionI {
  type: typeof ADD_RATING;
  payload: {
    courseId: string;
    userLogin: string;
    rating: number;
    comment: CommentI;
  };
}

const addRating = (state: CourseI[], action: RatingActionI) => {
  return state.map((currentStateElement: CourseI) => {
    if (currentStateElement._id !== action.payload.courseId) {
      return currentStateElement;
    }

    const userHasAlreadyRated = currentStateElement.rating.filter(
      item => item.userLogin === action.payload.userLogin
    );

    if (userHasAlreadyRated.length > 0) return currentStateElement;

    const updateCourse = { ...currentStateElement };

    const newRating = {
      userLogin: action.payload.userLogin,
      rating: action.payload.rating,
      comment: action.payload.comment.formValue,
    };
    updateCourse.rating = [...currentStateElement.rating, newRating];
    editDbCourse(updateCourse);
    return updateCourse;
  });
};
interface fetchCourseDataActionI {
  type: typeof FETCH_COURSES_DATA;
  payload: {
    data: [];
  };
}
const fetchCoursesData = (state: CourseI[], action: fetchCourseDataActionI) => {
  return action.payload;
};

const courseReducer = (
  state: CourseI[] = [],
  action: fetchCourseDataActionI | RatingActionI
) => {
  switch (action.type) {
    case ADD_RATING:
      return addRating(state, action);
    case FETCH_COURSES_DATA:
      return fetchCoursesData(state, action);
    default:
      return state;
  }
};
export default courseReducer;
