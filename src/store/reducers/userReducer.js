import {
  ADD_USER,
  CHANGE_LOGIN_STATUS,
  BUY_COURSE,
  ADD_COURSE_TO_SHOPPING_CART,
  REMOVE_COURSE_FROM_SHOPPING_CART,
  SELECT_COURSE,
} from '../actions/userActions.js';

import { v4 as uuid } from 'uuid';

import axios from 'axios';

const addUsertoDB = async values => {
  const newValues = {
    id: '10857eda-899a-4d3c-a8d0-50db9bd215b3',
    login: 'mamaa',
    password: 'mama',
    purchasedCourses: [],
    shoppingCart: [],
    logged: false,
    selectedCourse: [],
  };
  const res = await axios.post(
    'http://localhost:3001/api/users',
    values
  );
};

const changeLoginStatus = (state, action) => {
  return state.map(currentStateElement => {
    if (
      currentStateElement.id !== action.payload.id
    ) {
      currentStateElement.logged = false;
      return currentStateElement;
    }

    const { logged } = action.payload;

    const {
      id,
      login,
      password,
      purchasedCourses,
      shoppingCart,
      selectedCourse,
    } = currentStateElement;
    return {
      id,
      login,
      password,
      purchasedCourses,
      shoppingCart,
      logged,
      selectedCourse,
    };
  });
};

const buyCourse = (state, action) => {
  const loggedUser = state.find(
    user => user.logged === true
  );
  const checkIfTheCourseAlreadyThere =
    loggedUser.purchasedCourses.find(
      courseId => courseId === action.payload
    );

  return state.map(currentStateElement => {
    if (
      currentStateElement.id !== loggedUser.id ||
      checkIfTheCourseAlreadyThere
    ) {
      return currentStateElement;
    }

    const {
      id,
      login,
      password,
      logged,
      selectedCourse,
    } = currentStateElement;
    return {
      id,
      login,
      password,
      shoppingCart: [],
      purchasedCourses: [
        ...loggedUser.purchasedCourses,
        ...action.payload,
      ],
      logged,
      selectedCourse,
    };
  });
};

const selectCourse = (state, action) => {
  const loggedUser = state.find(
    user => user.logged === true
  );
  // const checkIfTheCourseAlreadyThere =
  //   loggedUser.shoppingCart.find(
  //     courseId => courseId === action.payload
  //   );

  return state.map(currentStateElement => {
    if (
      currentStateElement.id !== loggedUser.id
    ) {
      return currentStateElement;
    }

    const {
      id,
      login,
      password,
      purchasedCourses,
      logged,
      shoppingCart,
    } = currentStateElement;
    return {
      id,
      login,
      password,
      purchasedCourses,
      shoppingCart,
      logged,
      selectedCourse: action.payload,
    };
  });
};

const addCourseToShoppingCart = (
  state,
  action
) => {
  const loggedUser = state.find(
    user => user.logged === true
  );
  const checkIfTheCourseAlreadyThere =
    loggedUser.shoppingCart.find(
      courseId => courseId === action.payload
    );

  return state.map(currentStateElement => {
    if (
      currentStateElement.id !== loggedUser.id ||
      checkIfTheCourseAlreadyThere
    ) {
      return currentStateElement;
    }

    const {
      id,
      login,
      password,
      logged,
      purchasedCourses,
      selectedCourse,
    } = currentStateElement;
    return {
      id,
      login,
      password,
      purchasedCourses,
      shoppingCart: [
        ...loggedUser.shoppingCart,
        action.payload,
      ],
      logged,
      selectedCourse,
    };
  });
};

const removeCourseFromShoppingCart = (
  state,
  action
) => {
  const loggedUser = state.find(
    user => user.logged === true
  );

  const newShoppingCart =
    loggedUser.shoppingCart.filter(
      item => item !== action.payload
    );

  return state.map(currentStateElement => {
    if (
      currentStateElement.id !== loggedUser.id
    ) {
      return currentStateElement;
    }

    const {
      id,
      login,
      password,
      logged,
      purchasedCourses,
      selectedCourse,
    } = currentStateElement;
    return {
      id,
      login,
      password,
      purchasedCourses,
      shoppingCart: [...newShoppingCart],
      logged,
      selectedCourse,
    };
  });
};

const addNewUser = (state, action) => {
  addUsertoDB(action.payload);
  return [...state, action.payload];
};
export const userReducer = (
  state = [
    {
      id: uuid(),
      login: 'admin',
      password: 'admin',
      purchasedCourses: [],
      shoppingCart: [],
      logged: false,
      selectedCourse: [],
    },
  ],
  action
) => {
  switch (action.type) {
    case ADD_USER:
      //   return [...state, action.payload];
      return addNewUser(state, action);
    case CHANGE_LOGIN_STATUS:
      return changeLoginStatus(state, action);
    case BUY_COURSE:
      return buyCourse(state, action);
    case ADD_COURSE_TO_SHOPPING_CART:
      return addCourseToShoppingCart(
        state,
        action
      );
    case REMOVE_COURSE_FROM_SHOPPING_CART:
      return removeCourseFromShoppingCart(
        state,
        action
      );
    case SELECT_COURSE:
      return selectCourse(state, action);
    default:
  }
  return state;
};
