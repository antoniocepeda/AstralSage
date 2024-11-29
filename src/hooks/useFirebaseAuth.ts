import { useState, useCallback } from 'react';
import { auth } from '@/lib/firebase';
import type { AuthError } from 'firebase/auth';

export const useFirebaseAuth = () => {
  const [error, setError] = useState<AuthError | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAuth = useCallback(async (
    authFunction: () => Promise<void>
  ) => {
    try {
      setLoading(true);
      setError(null);
      await authFunction();
    } catch (err) {
      setError(err as AuthError);
    } finally {
      setLoading(false);
    }
  }, []);

  return { error, loading, handleAuth };
}; 