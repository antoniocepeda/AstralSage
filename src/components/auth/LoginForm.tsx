import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BaseInput } from '@/components/ui/BaseInput';
import { Button } from '@/components/ui/Button';
import { loginSchema, type LoginFormData } from '@/schemas/auth';

interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void;
  isLoading?: boolean;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, isLoading }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <BaseInput
        label="Email address"
        type="email"
        placeholder="Enter your email"
        error={errors.email?.message}
        {...register('email')}
      />

      <BaseInput
        label="Password"
        type="password"
        placeholder="Enter your password"
        error={errors.password?.message}
        {...register('password')}
      />

      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="rounded border-border text-accent focus:ring-accent h-4 w-4"
          />
          <span className="ml-2 text-sm text-text-secondary">Remember me</span>
        </label>
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? 'Signing in...' : 'Sign in'}
      </Button>
    </form>
  );
}; 