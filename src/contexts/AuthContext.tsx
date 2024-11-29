import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { User, AuthState } from '../types/auth';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
  });

  const login = (email: string, password: string) => {
    // For demo purposes, accept any credentials
    const mockUser: User = {
      id: '1',
      email,
      name: 'Test User',
      birthDate: '1990-01-01',
      zodiacSign: 'Capricorn',
    };

    setAuth({
      user: mockUser,
      isAuthenticated: true,
    });

    navigate('/dashboard');
  };

  const logout = () => {
    setAuth({
      user: null,
      isAuthenticated: false,
    });
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};