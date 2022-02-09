import {
  ADD_RATING,
  ADD_COMMENT,
} from '../actions/courseActions.js';

import img1 from '../../assets/images/img1.PNG';
import vid1 from '../../assets/videos/vid1.mp4';
import { v4 as uuid } from 'uuid';

const addRating = (state, action) => {
  return state.map(currentStateElement => {
    if (
      currentStateElement.id !==
      action.payload.courseId
    ) {
      return currentStateElement;
    }

    const x = currentStateElement.rating.filter(
      item =>
        item.userId === action.payload.userId
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
      comment,
      rating,
    } = currentStateElement;

    const newRating = {
      userId: action.payload.userId,
      rating: action.payload.rating,
    };
    return {
      authors,
      id,
      img,
      vid,
      price,
      title,
      category,
      comment,
      rating: [...rating, newRating],
    };
  });
};

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
      rating: [],
      comments: '',
    },
    {
      authors: 'Marcin 2',
      id: uuid(),
      img: img1,
      vid: vid1,
      price: 29.99,
      title: 'Course 2',
      category: 'programming',
      rating: [],
      comments: '',
    },
    {
      authors: 'Marcin 3',
      id: uuid(),
      img: img1,
      vid: vid1,
      price: 39.99,
      title: 'Course 3',
      category: 'maths',
      rating: [],
      comments: '',
    },
    {
      authors: 'Marcin 4',
      id: uuid(),
      img: img1,
      vid: vid1,
      price: 49.99,
      title: 'Course 4',
      category: 'languages',
      rating: [],
      comments: '',
    },
    {
      authors: 'Marcin 5',
      id: uuid(),
      img: img1,
      vid: vid1,
      price: 59.99,
      title: 'Course 5',
      category: 'programming',
      rating: [],
      comments: '',
    },
  ],
  action
) => {
  switch (action.type) {
    case ADD_RATING:
      return addRating(state, action);
    case ADD_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
};
