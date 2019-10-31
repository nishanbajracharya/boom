import wretch from 'wretch';

import API from '../constants/api';
import APP from '../constants/app';

const instance = wretch(API.BASE_URL).headers({ 'X-ListenAPI-Key': APP.API_TOKEN });

export function get(url, options) {
  return instance.url(url).get(options);
}

export default {
  get,
  instance,
};