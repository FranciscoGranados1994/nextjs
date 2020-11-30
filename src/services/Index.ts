import axios from 'axios';
export const Request = {
  get: (url) => {},
  getById: () => {},
  post: async (url, data) => {
    const petition = await axios
      .post(url, data)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return error.response;
      });

    return petition;
  },
  put: () => {},
  delete: () => {},
};
