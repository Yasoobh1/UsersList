import axios from 'axios';
import { baseUrl } from './constants';
import url from 'url';

function baseAxios(options) {
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  return axios.create({
    baseURL: url.format(baseUrl),
    timeout: options.timeout || 30000,
    headers: defaultHeaders,
  });
}

function executeRequest(method, pathname, data, options = {}) {
  const body = method === 'get' || !data ? {} : { data };
  const reqObj = { method, url: pathname, params: options.query, ...body };

  const baseAxiosRequest = baseAxios(options);

  return new Promise((resolve, reject) => {
    return baseAxiosRequest
      .request(reqObj)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export default {
  get(pathname, options) {
    return executeRequest('get', pathname, null, options);
  },
  post(pathname, data, options) {
    return executeRequest('post', pathname, data, options);
  },
  put(pathname, data, options) {
    return executeRequest('put', pathname, data, options);
  },
  delete(pathname, data, options) {
    return executeRequest('delete', pathname, data, options);
  },

  all(promises) {
    return axios.all(promises);
  },
};
