import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api'; // Remplacez par votre URL d'API

const authApi = {
  login: (credentials) => axios.post(`${API_BASE_URL}/login`, credentials),
  register: (data) => axios.post(`${API_BASE_URL}/register`, data),
  logout: () => axios.post(`${API_BASE_URL}/logout`),
};

export default authApi;
