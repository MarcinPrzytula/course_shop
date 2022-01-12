export const TAKE_ID = 'TAKE_ID';

export const takeId = id => ({
  type: TAKE_ID,
  payload: {
    id,
  },
});
