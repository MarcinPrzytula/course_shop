import { combineReducers } from 'redux';

import { userReducer } from './userReducer';
import { courseReducer } from './courseReducer';

export const rootReducer = combineReducers({
  users: userReducer,
  courses: courseReducer,
});
