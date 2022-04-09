import {
  ADD_RATING,
  ADD_COMMENT,
  FETCH_COURSES_DATA,
} from '../actions/courseActions.js';

const addRating = (state, action) => {
  return state.map(currentStateElement => {
    if (
      currentStateElement.id !== action.payload.courseId
    ) {
      return currentStateElement;
    }

    const x = currentStateElement.rating.filter(
      item => item.userId === action.payload.userId
    );
    if (x.length > 0) return currentStateElement;

    const {
      authors,
      id,
      img,
      vid,
      price,
      title,
      category,
      rating,
    } = currentStateElement;

    const newRating = {
      userId: action.payload.userId,
      rating: action.payload.rating,
      comment: action.payload.comment.formValue,
    };
    return {
      authors,
      id,
      img,
      vid,
      price,
      title,
      category,

      rating: [...rating, newRating],
    };
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
    case ADD_COMMENT:
      return [...state, action.payload];
    case FETCH_COURSES_DATA:
      return fetchCoursesData(state, action);
    default:
      return state;
  }
};
