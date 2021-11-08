import {
  BUY,
  DELETE,
} from '../actions/courseActions.js';

import { v4 as uuid } from 'uuid';

export const courseReducer = (
  state = [
    {
      authors: ['Marcin 1'],
      id: uuid(),
      img: 'https://dummyimage.com/200x200/000/fff.jpg&text=cours',
      price: 19.99,
      title: 'Kurs 1',
    },
    {
      authors: ['Marcin 2'],
      id: uuid(),
      img: 'https://dummyimage.com/200x200/000/fff.jpg&text=cours',
      price: 29.99,
      title: 'Kurs 2',
    },
    {
      authors: ['Marcin 3'],
      id: uuid(),
      img: 'https://dummyimage.com/200x200/000/fff.jpg&text=cours',
      price: 39.99,
      title: 'Kurs 3',
    },
    {
      authors: ['Marcin 4'],
      id: uuid(),
      img: 'https://dummyimage.com/200x200/000/fff.jpg&text=cours',
      price: 49.99,
      title: 'Kurs 4',
    },
    {
      authors: ['Marcin 5'],
      id: uuid(),
      img: 'https://dummyimage.com/200x200/000/fff.jpg&text=cours',
      price: 59.99,
      title: 'Kurs 5',
    },
  ],
  action
) => {
  switch (action.type) {
    case BUY:
      return [...state, action.payload];

    case DELETE:
      return state.filter(
        currentStateElement =>
          currentStateElement.id !==
          action.payload.id
      );
    default:
      console.warn(
        `Nie mamy akcji typu ${action.type}`
      );

      return state;
  }
};
