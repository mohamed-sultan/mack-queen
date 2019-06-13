/* eslint-disable import/prefer-default-export */
export const getUser = user => ({
  type: 'GET_USER',
  payload: user,
});
export const updateAdult = adult => ({
  type: 'UPDATE_ADULT',
  payload: adult,
});
export function removeProfile() {
  return {
    type: 'USER_RESET',
    payload: Object.assign({}),
  };
}
