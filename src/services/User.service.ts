import { Request } from './Index';

/* Requests releated with user's actions */

export const UserRequest = {
  updateProfile: async (userData) => {
    /* i have to change the username according to the value prev recieved */
    const petition = await Request.patch(
      'http://localhost:8000/users/MataFrank/profile/',
      userData
    );
    return petition;
  },
};
