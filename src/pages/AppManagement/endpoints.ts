import request from 'config/apiConfig';

export const getUserData = () => {
  return request.get('users/1');
};
