import user from './user';
import adult from './adult';
import hotel from './hotelReducer';

const rehydrated = (state = false, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return true;
    default:
      return state;
  }
};

export default {
  user,
  adult,
  hotel,
  rehydrated,
};
