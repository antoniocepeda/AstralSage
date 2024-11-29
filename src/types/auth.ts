export interface User {
  id: string;
  email: string;
  name: string;
  birthDate: string;
  zodiacSign: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}