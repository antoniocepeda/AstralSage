import React from 'react';
import { cn } from '@/shared/utils/cn';

export interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
}

export const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
  ({ label, error, className = '', containerClassName = '', ...props }, ref) => {
    return (
      <div className={cn("space-y-2", containerClassName)}>
        {label && (
          <label className="block text-sm font-medium text-text-primary">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full rounded-lg bg-card-bg/50 border border-border",
            "px-4 py-2.5 text-text-primary placeholder:text-text-secondary/50",
            "focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent",
            "transition duration-200",
            error && "border-red-500 focus:ring-red-500/50 focus:border-red-500",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

BaseInput.displayName = 'BaseInput'; 