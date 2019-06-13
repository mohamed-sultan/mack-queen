export const initialState = {};

export default function hotel(state = {}, action) {
  switch (action.type) {
    case 'GET_HOTEL':
      return action.payload;
    default:
      return state;
  }
}
