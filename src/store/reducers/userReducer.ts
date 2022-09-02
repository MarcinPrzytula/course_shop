import {
  FETCH_USER_DATA,
  ADD_USER,
  LOGIN_USER,
  BUY_COURSE,
  ADD_COURSE_TO_SHOPPING_CART,
  REMOVE_COURSE_FROM_SHOPPING_CART,
  SELECT_COURSE,
} from '../actions/userActions';

import axios from 'axios';

interface user {
  _id: string;
  login: string;
  password: string;
  purchasedCourses: Array<string>;
  shoppingCart: Array<string>;
  selectedCourse: string;
}

const editDbUser = async (values: user) => {
  const URL = process.env.REACT_APP_API
    ? `${process.env.REACT_APP_API.trim()}api/user/${values._id}`
    : `http://localhost:3001/api/user/${values._id}`;

  await axios.put(URL, values);
};

interface BuyCourseActionI {
  type: typeof BUY_COURSE;
  payload: Array<string>;
}
interface SelectCourseActionI {
  type: typeof SELECT_COURSE;
  payload: string;
}

interface AddCourseToShoppingCartActionI {
  type: typeof ADD_COURSE_TO_SHOPPING_CART;
  payload: string;
}

interface RemoveCourseFromShoppingCartActionI {
  type: typeof REMOVE_COURSE_FROM_SHOPPING_CART;
  payload: string;
}
interface FetchUserDataActionI {
  type: typeof FETCH_USER_DATA;
  payload: Object;
}
interface AddUserActionI {
  type: typeof ADD_USER;
  payload: Object;
}
interface LoginUserActionI {
  type: typeof LOGIN_USER;
  payload: Object;
}
type UserDispatchTypes =
  | BuyCourseActionI
  | SelectCourseActionI
  | AddCourseToShoppingCartActionI
  | RemoveCourseFromShoppingCartActionI
  | FetchUserDataActionI
  | AddUserActionI
  | LoginUserActionI;

const buyCourse = (state: user, action: BuyCourseActionI) => {
  //   const checkIfTheCourseAlreadyThere = state.purchasedCourses.find(
  //     courseId => courseId === action.payload
  //   );
  const checkIfTheCourseAlreadyThere = state.purchasedCourses.find(courseId =>
    action.payload.find((payloadId: string) => payloadId === courseId)
  );
  if (checkIfTheCourseAlreadyThere) {
    return state;
  }
  const newState = { ...state };

  newState.purchasedCourses = [...state.purchasedCourses, ...action.payload];

  newState.shoppingCart = [];
  editDbUser(newState);
  return newState;
};

const selectCourse = (state: user, action: SelectCourseActionI) => {
  const newState = { ...state };
  newState.selectedCourse = action.payload;

  editDbUser(newState);
  return newState;
};

const addCourseToShoppingCart = (
  state: user,
  action: AddCourseToShoppingCartActionI
) => {
  const checkIfTheCourseAlreadyThere = state.shoppingCart.find(
    courseId => courseId === action.payload
  );

  if (checkIfTheCourseAlreadyThere) {
    return state;
  }

  const newState = { ...state };
  newState.shoppingCart = [...state.shoppingCart, action.payload];
  editDbUser(newState);
  return newState;
};

const removeCourseFromShoppingCart = (
  state: user,
  action: RemoveCourseFromShoppingCartActionI
) => {
  const newShoppingCart = state.shoppingCart.filter(
    item => item !== action.payload
  );
  const newState = { ...state };
  newState.shoppingCart = [...newShoppingCart];
  editDbUser(newState);
  return newState;
};

const userReducer = (
  state: user = {
    _id: '',
    login: '',
    password: '',
    purchasedCourses: [],
    shoppingCart: [],
    selectedCourse: '',
  },
  action: UserDispatchTypes
) => {
  switch (action.type) {
    case FETCH_USER_DATA:
      return action.payload;
    case ADD_USER:
      return action.payload;
    case LOGIN_USER:
      return action.payload;
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

export default userReducer;
