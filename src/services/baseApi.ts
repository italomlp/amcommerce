import axios from 'axios';

const baseApi = axios.create({
  baseURL: `http://localhost:3000`,
});

export default baseApi;
