export const initialState = {
  email: '',
  password: '',
  token: '',
  loggedIn: false,
};

export default function user(state = {}, action) {
  switch (action.type) {
    case 'GET_USER':
      return action.payload;
    case 'USER_DETAILS_UPDATE': {
      return {
        ...state,
      };
    }
    case 'USER_ERROR': {
      if (action.data) {
        return {
          ...state,
          loading: false,
          error: action.data,
        };
      }
      return initialState;
    }
    case 'USER_RESET': {
      return initialState;
    }
    default:
      return state;
  }
}
