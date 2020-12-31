import axios from 'axios';
import Cookie from 'js-cookie';

async function getToken() {
  const token = await Cookie.get('Cride.Access');

  const header = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  console.log('Header', header);

  return header;
}

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
  patch: async (url, data) => {
    const header = await getToken();
    console.log('inside petition', header);

    const petition = await axios
      .patch(url, data, header)
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
