export const AUTH_ERROR_MESSAGES = {
  EMAIL_IN_USE: 'This email is already registered',
  WEAK_PASSWORD: 'Password should be at least 8 characters',
  INVALID_EMAIL: 'Please enter a valid email address',
  // ... other error messages
} as const;

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  // ... other routes
} as const; 