import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/orders'
});

export default instance;
