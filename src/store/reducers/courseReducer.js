import {
  ADD_RATING,
  ADD_COMMENT,
} from '../actions/courseActions.js';

import img1 from '../../assets/images/img1.PNG';
import vid1 from '../../assets/videos/vid1.mp4';

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

export const courseReducer = (
  state = [
    {
      authors: 'Marcin Przytuła',
      id: 1,
      img: img1,
      vid: vid1,
      price: 19.99,
      title: 'English basics',
      category: 'languages',
      rating: [],
    },
    {
      authors: 'Jan Kowalski',
      id: 2,
      img: img1,
      vid: vid1,
      price: 29.99,
      title: 'Advanced JavaScript',
      category: 'programming',
      rating: [],
      comments: '',
    },
    {
      authors: 'Jon Smith',
      id: 3,
      img: img1,
      vid: vid1,
      price: 39.99,
      title: 'Division and multiplication',
      category: 'maths',
      rating: [],
    },
    {
      authors: 'Ricky and Rafael',
      id: 4,
      img: img1,
      vid: vid1,
      price: 49.99,
      title: 'Advanced Spanish',
      category: 'languages',
      rating: [],
      comments: '',
    },
    {
      authors: 'Maciej Steam',
      id: 5,
      img: img1,
      vid: vid1,
      price: 59.99,
      title: 'Basic PHP',
      category: 'programming',
      rating: [],
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
