import {
  FETCH_USERS_DATA,
  BUY_COURSE,
  ADD_COURSE_TO_SHOPPING_CART,
  REMOVE_COURSE_FROM_SHOPPING_CART,
  SELECT_COURSE,
} from '../actions/userActions.js';

import axios from 'axios';

const editDbUser = async values => {
  const URL = process.env.REACT_APP_API
    ? `${process.env.REACT_APP_API.trim()}api/user/${
        values._id
      }`
    : `http://localhost:3001/api/user/${values._id}`;

  await axios.put(URL, values);
};

const buyCourse = (state, action) => {
  const checkIfTheCourseAlreadyThere =
    state.purchasedCourses.find(
      courseId => courseId === action.payload
    );

  if (checkIfTheCourseAlreadyThere) {
    return state;
  }
  const newState = { ...state };

  newState.purchasedCourses = [
    ...state.purchasedCourses,
    ...action.payload,
  ];

  newState.shoppingCart = [];
  editDbUser(newState);
  return newState;
};

const selectCourse = (state, action) => {
  const newState = { ...state };
  newState.selectedCourse = action.payload;

  editDbUser(newState);
  return newState;
};

const addCourseToShoppingCart = (state, action) => {
  const checkIfTheCourseAlreadyThere =
    state.shoppingCart.find(
      courseId => courseId === action.payload
    );

  if (checkIfTheCourseAlreadyThere) {
    return state;
  }

  const newState = { ...state };
  newState.shoppingCart = [
    ...state.shoppingCart,
    action.payload,
  ];
  editDbUser(newState);
  return newState;
};

const removeCourseFromShoppingCart = (state, action) => {
  const newShoppingCart = state.shoppingCart.filter(
    item => item !== action.payload
  );
  const newState = { ...state };
  newState.shoppingCart = [...newShoppingCart];
  editDbUser(newState);
  return newState;
};

const fetchUserData = (state, action) => {
  //   console.log(action.payload);
  return action.payload;
};

export const userReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_USERS_DATA:
      return fetchUserData(state, action);
    case BUY_COURSE:
      return buyCourse(state, action);
    case ADD_COURSE_TO_SHOPPING_CART:
      return addCourseToShoppingCart(state, action);
    case REMOVE_COURSE_FROM_SHOPPING_CART:
      return removeCourseFromShoppingCart(state, action);
    case SELECT_COURSE:
      return selectCourse(state, action);
    default:
  }
  return state;
};
