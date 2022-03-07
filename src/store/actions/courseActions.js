export const ADD_RATING = 'ADD_RATING';
export const ADD_COMMENT = 'CHANGE_COMMENT';

export const addRating = (
  courseId,
  userId,
  rating,
  comment
) => ({
  type: ADD_RATING,
  payload: { courseId, userId, rating, comment },
});

export const addComment = (id, comment) => ({
  type: ADD_COMMENT,
  payload: { id, comment },
});
