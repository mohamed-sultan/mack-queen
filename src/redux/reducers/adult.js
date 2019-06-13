export const initialState = {};

export default function adult(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_ADULT':
      return action.payload;
    default:
      return state;
  }
}
