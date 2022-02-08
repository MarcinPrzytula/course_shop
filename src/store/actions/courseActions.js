export const ADD_RATING = 'ADD_RATING';
export const ADD_COMMENT = 'CHANGE_COMMENT';

export const addRate = (id, rate) => ({
  type: ADD_RATING,
  payload: { id, rate },
});

export const addComment = (id, comment) => ({
  type: ADD_COMMENT,
  payload: { id, comment },
});
