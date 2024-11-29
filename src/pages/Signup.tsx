import React from 'react';
import { Link } from 'react-router-dom';
import { Moon } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Signup: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle signup logic here
    const formData = new FormData(e.currentTarget);
    console.log({
      email: formData.get('email'),
      password: formData.get('password'),
    });
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-md mx-auto">
        <div className="glass-card rounded-lg p-8">
          <div className="text-center mb-8">
            <Moon className="mx-auto h-12 w-12 text-accent animate-glow" />
            <h2 className="mt-6 text-3xl font-bold text-text-primary">
              Begin Your Cosmic Journey
            </h2>
            <p className="mt-2 text-text-secondary">
              Create your account to unlock personalized astrological insights
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-secondary">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 w-full rounded-md border border-border bg-card-bg p-2 text-text-primary"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text-secondary">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="mt-1 w-full rounded-md border border-border bg-card-bg p-2 text-text-primary"
                placeholder="Create a password"
              />
            </div>

            <Button type="submit" className="w-full">
              Sign up
            </Button>

            <p className="text-center text-text-secondary">
              Already have an account?{' '}
              <Link to="/login" className="text-accent hover:underline">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};