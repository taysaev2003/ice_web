import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://server.tg-delivery.ru/api/icecream',
  validateStatus: () => true,
});

export default instance;
