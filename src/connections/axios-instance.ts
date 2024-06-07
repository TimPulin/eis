import axios from 'axios';

const API_BASE_URL = 'http://showroom.eis24.me/api/v4/test/';

const eisAPI = axios.create({
  baseURL: API_BASE_URL,
});

eisAPI.interceptors.request.use((request) => {
  request.headers['Content-Type'] = 'application/json';
  return request;
});

export { eisAPI };
