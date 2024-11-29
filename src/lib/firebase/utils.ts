import { FIREBASE_CONFIG_KEYS } from '@/constants';

export const validateEnvVariables = () => {
  const missingVars = FIREBASE_CONFIG_KEYS.filter(
    key => !import.meta.env[`VITE_FIREBASE_${key}`]
  );

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required Firebase configuration: ${missingVars.join(', ')}`
    );
  }
}; 