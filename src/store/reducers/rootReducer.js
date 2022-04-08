import { combineReducers } from 'redux';

import { userReducer } from './userReducer';
import { courseReducer } from './courseReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  courses: courseReducer,
});
