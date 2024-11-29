import React from 'react';
import { Link } from 'react-router-dom';
import { Moon } from 'lucide-react';
import { LoginForm } from '@/components/auth/LoginForm';
import { useAuth } from '@/contexts/AuthContext';
import type { LoginFormData } from '@/schemas/auth';

export const Login: React.FC = () => {
  const { login, isLoading } = useAuth();

  const handleLogin = (data: LoginFormData) => {
    login(data.email, data.password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Moon className="h-12 w-12 text-accent mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-text-primary mb-2">Welcome back</h2>
          <p className="text-text-secondary">Sign in to continue your cosmic journey</p>
        </div>

        <div className="bg-card-bg/30 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-border">
          <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
          
          <p className="text-center text-text-secondary text-sm mt-6">
            Don't have an account?{' '}
            <Link to="/signup" className="text-accent hover:text-accent/80 transition-colors">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};