import CONFIG from '../config/config';

export const SERVER_ERROR_MSG = 'Server Error';

const checkIfServerError = (res) => {
  if (!res.ok && res.status === 500) {
    throw Error(SERVER_ERROR_MSG);
  }

  return res;
};

export const fetchGetMethod = (url) => {
  return fetch(`${CONFIG.apiUrl}/${url}`, {
    mode: 'cors',
  })
    .then(checkIfServerError)
    .then(res => res.json())
    .catch((err) => {
      throw err;
    });
};

export const fetchPutMethod = (url, data) => {
  return fetch(`${CONFIG.apiUrl}/${url}`, {
    method: 'PUT',
    mode: 'cors',
    body: JSON.stringify({ data }),
  })
    .then(res => res.json());
};

export default {
  fetchGetMethod,
  fetchPutMethod,
};
