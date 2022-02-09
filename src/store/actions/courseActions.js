export const ADD_RATING = 'ADD_RATING';
export const ADD_COMMENT = 'CHANGE_COMMENT';

export const addRating = (
  courseId,
  userId,
  rating
) => ({
  type: ADD_RATING,
  payload: { courseId, userId, rating },
});

export const addComment = (id, comment) => ({
  type: ADD_COMMENT,
  payload: { id, comment },
});
