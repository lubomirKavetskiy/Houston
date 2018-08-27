import axios from 'axios';

import apiHelper from '../helpers/apiHelper';
import tokenHelper from '../helpers/tokenHelper';

const apiPath = '/api/v1.0/';

const baseURLs = {
  development: 'http://localhost:4000',
  production: '',
};

const axiosInstance = axios.create({
  baseURL: baseURLs[process.env.NODE_ENV] + apiPath,
});

const api = {
  request(options) {
    options.headers = options.headers || {};

    Object.assign(options.headers, {
      Authorization: `Bearer ${tokenHelper.getToken()}`,
    });

    return new Promise((resolve, reject) => {
      axiosInstance(options)
        .then(res => resolve(res))
        .catch(apiHelper.handleError(reject));
    });
  },
};

export default api;
