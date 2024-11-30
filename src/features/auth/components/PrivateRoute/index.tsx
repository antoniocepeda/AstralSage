import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/features/auth/contexts/AuthContext';
import { ROUTES } from '@/config/constants';

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  return isAuthenticated ? <>{children}</> : <Navigate to={ROUTES.LOGIN} />;
}; 