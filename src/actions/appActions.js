export const BUY = 'BUY';
export const DELETE = 'DELETE';

export const buyCourse = ({ id }) => ({
  type: BUY,
  payload: {
    id,
  },
});

export const deleteCourse = ({ id }) => ({
  type: DELETE,
  payload: {
    id,
  },
});
