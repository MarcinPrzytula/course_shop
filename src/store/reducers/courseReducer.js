import {
  ADD_RATING,
  ADD_COMMENT,
} from '../actions/courseActions.js';

import img1 from '../../img/img1.PNG';
import vid1 from '../../videos/vid1.mp4';
import { v4 as uuid } from 'uuid';

export const courseReducer = (
  state = [
    {
      authors: 'Marcin 1',
      id: uuid(),
      img: img1,
      vid: vid1,
      price: 19.99,
      title: 'Course 1',
      category: 'languages',
    },
    {
      authors: 'Marcin 2',
      id: uuid(),
      img: img1,
      vid: vid1,
      price: 29.99,
      title: 'Course 2',
      category: 'programming',
    },
    {
      authors: 'Marcin 3',
      id: uuid(),
      img: img1,
      vid: vid1,
      price: 39.99,
      title: 'Course 3',
      category: 'maths',
    },
    {
      authors: 'Marcin 4',
      id: uuid(),
      img: img1,
      vid: vid1,
      price: 49.99,
      title: 'Course 4',
      category: 'languages',
    },
    {
      authors: 'Marcin 5',
      id: uuid(),
      img: img1,
      vid: vid1,
      price: 59.99,
      title: 'Course 5',
      category: 'programming',
    },
  ],
  action
) => {
  switch (action.type) {
    case ADD_RATING:
      return [...state, action.payload];
    case ADD_COMMENT:
      return [...state, action.payload];
    default:
      console.warn(
        `Nie mamy akcji typu ${action.type}`
      );

      return state;
  }
};
