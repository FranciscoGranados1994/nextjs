import { Request } from './Index';

export const AuthRequest = {
  get: async (endpoint) => {
    const petition = await Request.get('');
    return petition;
  },
  signUp: async (userData) => {
    const petition = await Request.post(
      'http://localhost:8000/users/signup/',
      userData
    );
    return petition;
  },
};
