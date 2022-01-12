import { combineReducers } from 'redux';

import { userReducer } from './userReducer';
import { coursesReducer } from './coursesReducer';

export const rootReducer = combineReducers({
  users: userReducer,
  courses: coursesReducer,
});
