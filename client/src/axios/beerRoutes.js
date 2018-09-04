import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/beers'
});

export default instance;
