import axios from 'axios';

const BASE_URL = 'http://localhoset:5000/api';

// register user
const register = async (userData: { name: string; password: string; email: string }) => {
  const response = await axios.post(`${BASE_URL}/users/register`, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// login user
const login = async (userData: { password: string; email: string }) => {
  const response = await axios.post(`${BASE_URL}/users/login`, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// logout user
const logout = async () => {
  localStorage.removeItem('user');
};

export const authService = { register, logout, login };
