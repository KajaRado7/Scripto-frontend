import axios from 'axios';

let Service = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 3000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export { Service };
