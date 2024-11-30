import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '@/shared/components/Layout/Navbar';
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { AuthProvider } from '@/features/auth/contexts/AuthContext';
import { useAuth } from '@/features/auth/contexts/AuthContext';
import { ThemeProvider } from '@/features/theme/contexts/ThemeContext';
import { PrivateRoute } from '@/features/auth/components/PrivateRoute';

export const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <div className="min-h-screen bg-background text-text-primary transition-colors">
            <Navbar />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                  path="/dashboard"
                  element={<PrivateRoute children={<Dashboard />} />}
                />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
};