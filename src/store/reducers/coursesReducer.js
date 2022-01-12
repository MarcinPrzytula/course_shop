import { TAKE_ID } from '../actions/coursesActions.js';

const takeId = (state, action) => {
  const checkIfTheCourseAlreadyThere = state.find(
    course => course.id === action.payload.id
  );
  if (checkIfTheCourseAlreadyThere) {
    return state;
  }
  return [...state, action.payload];
};

export const coursesReducer = (
  state = [],
  action
) => {
  switch (action.type) {
    case TAKE_ID:
      return takeId(state, action);

    default:
      console.warn(
        `Nie mamy akcji typu ${action.type}`
      );

      return state;
  }
};
