import React from 'react';
import { Link } from 'react-router-dom';
import { Moon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type LoginForm = z.infer<typeof loginSchema>;

export const Login: React.FC = () => {
  const { login, error, isLoading } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginForm) => {
    login(data.email, data.password);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-md mx-auto">
        <div className="glass-card rounded-lg p-8">
          <div className="text-center mb-8">
            <Moon className="mx-auto h-12 w-12 text-accent animate-glow" />
            <h2 className="mt-6 text-3xl font-bold text-text-primary">
              Welcome back
            </h2>
            <p className="mt-2 text-text-secondary">
              Sign in to continue your cosmic journey
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1 w-full rounded-md border border-border bg-card-bg p-2 text-text-primary"
                  placeholder="Enter your email"
                  {...register('email')}
                />
                {errors.email?.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-text-secondary">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-1 w-full rounded-md border border-border bg-card-bg p-2 text-text-primary"
                  placeholder="Enter your password"
                  {...register('password')}
                />
                {errors.password?.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-border text-accent focus:ring-accent"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-text-secondary">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="/forgot-password" className="text-accent hover:text-accent/80">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Sign in
            </Button>

            <p className="text-center text-text-secondary">
              Don't have an account?{' '}
              <Link to="/signup" className="text-accent hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};