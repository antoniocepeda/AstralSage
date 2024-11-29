import React from 'react';
import { Link } from 'react-router-dom';
import { Moon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';
import { FirebaseError } from 'firebase/app';

const signupSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  birthDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)'),
});

type SignupForm = z.infer<typeof signupSchema>;

export const Signup: React.FC = () => {
  const { signup, error, isLoading, setError } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupForm) => {
    try {
      await signup(data);
      // Redirect happens automatically via AuthContext
    } catch (error) {
      // Handle specific Firebase auth errors
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            setError('This email is already registered');
            break;
          case 'auth/weak-password':
            setError('Password should be at least 6 characters');
            break;
          default:
            setError('Failed to create account');
        }
      }
    }
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

          {error && (
            <div className="mb-4 p-3 rounded bg-red-100 text-red-600">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-secondary">
                Email address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className="mt-1 w-full rounded-md border border-border bg-card-bg p-2 text-text-primary"
                {...register('email')}
              />
              {errors.email?.message && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-secondary">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                className="mt-1 w-full rounded-md border border-border bg-card-bg p-2 text-text-primary"
                {...register('name')}
              />
              {errors.name?.message && (
                <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="birthDate" className="block text-sm font-medium text-text-secondary">
                Birth Date
              </label>
              <input
                id="birthDate"
                type="date"
                className="mt-1 w-full rounded-md border border-border bg-card-bg p-2 text-text-primary"
                {...register('birthDate')}
              />
              {errors.birthDate?.message && (
                <p className="mt-1 text-sm text-red-500">{errors.birthDate.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text-secondary">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="mt-1 w-full rounded-md border border-border bg-card-bg p-2 text-text-primary"
                {...register('password')}
              />
              {errors.password?.message && (
                <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : 'Sign up'}
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