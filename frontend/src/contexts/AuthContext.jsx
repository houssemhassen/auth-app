import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authApi from '../services/authService';
import { saveToken, getToken, clearToken } from '../utils/tokenStorage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (token) {
      // Décoder et récupérer les informations utilisateur (si nécessaire)
      //setUser({ name: 'John Doe' }); // Exemple : à remplacer par une requête API
    }
    setIsLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      const response = await authApi.login(credentials);
      saveToken(response.data.token);

      const user = {
        firstName : response.data.firstName,
        lastName : response.data.lastName,
        email : response.data.email,
        role : response.data.role,
      }
      setUser(user);
      if (user.role === "User") {
        navigate('/home');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const register = async (data) => {
    try {
      const response = await authApi.register(data);
      saveToken(response.data.token);
      setUser(response.data.user);
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  const logout = () => {
    clearToken();
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};