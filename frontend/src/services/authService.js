import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/users'; // Remplacez par votre URL d'API

const authApi = {
  login: (credentials) => axios.post(`${API_BASE_URL}/authenticate`, credentials),
  register: (data) => axios.post(`${API_BASE_URL}/register`, data),
  logout: () => axios.post(`${API_BASE_URL}/logout`),
};

export default authApi;
