import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Menu } from 'lucide-react';
import { Button } from '@/shared/components/Button';
import { useTheme } from '@/features/theme/contexts/ThemeContext';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 dark:bg-background backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Moon className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold text-default">Celestial Insights</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-card-bg transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 accent-glow" />
              ) : (
                <Moon className="h-5 w-5 accent-glow" />
              )}
            </button>
            <Link to="/login">
              <Button variant="outline" size="sm">Log in</Button>
            </Link>
            <Link to="/signup">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>

          <div className="md:hidden">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div 
            ref={menuRef}
            className="md:hidden absolute right-4 top-16 w-48 py-2 bg-card-bg border border-border rounded-lg shadow-lg"
          >
            <button
              onClick={() => {
                toggleDarkMode();
                setIsMenuOpen(false);
              }}
              className="w-full px-4 py-2 text-left hover:bg-background/50 transition-colors flex items-center space-x-2"
            >
              {isDarkMode ? (
                <>
                  <Sun className="h-5 w-5 accent-glow" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="h-5 w-5 accent-glow" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
            <Link 
              to="/login" 
              className="block px-4 py-2 hover:bg-background/50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Log in
            </Link>
            <Link 
              to="/signup" 
              className="block px-4 py-2 hover:bg-background/50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};