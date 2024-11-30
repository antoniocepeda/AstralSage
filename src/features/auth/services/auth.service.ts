import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  UserCredential
} from 'firebase/auth';
import { auth } from '@/config/firebase';
import type { User } from '../types/auth';

const mapFirebaseUser = (userCredential: UserCredential): User => {
  const { user } = userCredential;
  return {
    id: user.uid,
    email: user.email || '',
    name: user.displayName || '',
    birthDate: '', // You'll need to store this in Firestore
    zodiacSign: '', // Calculate this based on birthDate
  };
};

export const authService = {
  login: async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return {
      user: mapFirebaseUser(userCredential),
      token: await userCredential.user.getIdToken(),
    };
  },

  signup: async (data: { email: string; password: string; name: string; birthDate: string }) => {
    const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
    
    // Update the user's profile with their name
    await updateProfile(userCredential.user, {
      displayName: data.name
    });

    return {
      user: mapFirebaseUser(userCredential),
      token: await userCredential.user.getIdToken(),
    };
  },

  logout: async () => {
    await signOut(auth);
  }
}; 