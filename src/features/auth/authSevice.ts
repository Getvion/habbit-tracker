import axios from 'axios';
import { ILogin, IRegister } from 'types/interfaces';

const BASE_URL = 'http://localhost:5000';

// Register user
const register = async (userData: IRegister) => {
  const response = await axios.post(`${BASE_URL}/register`, userData);

  return response.data;
};

// login user
const login = async (userData: ILogin) => {
  const response = await axios.post(`${BASE_URL}/login`, userData);

  return response.data;
};

// logout user
const logout = async () => {
  localStorage.removeItem('user');
};

export const authService = { register, logout, login };
