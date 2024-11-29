import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { validateEnvVariables } from './utils';

export class Firebase {
  private static instance: Firebase;
  private app;
  private auth;
  private analytics;

  private constructor() {
    validateEnvVariables();
    
    const config = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      // ... other config
    };

    this.app = getApps().length ? getApps()[0] : initializeApp(config);
    this.auth = getAuth(this.app);
    this.analytics = getAnalytics(this.app);
  }

  public static getInstance(): Firebase {
    if (!Firebase.instance) {
      Firebase.instance = new Firebase();
    }
    return Firebase.instance;
  }

  public getAuth() {
    return this.auth;
  }

  public getAnalytics() {
    return this.analytics;
  }
}

export const firebase = Firebase.getInstance();
export const auth = firebase.getAuth();
export const analytics = firebase.getAnalytics(); 