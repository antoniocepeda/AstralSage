import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Menu } from 'lucide-react';
import { Button } from '../ui/Button';
import { useTheme } from '../../contexts/ThemeContext';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 dark:bg-background backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Moon className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-text-primary">Celestial Insights</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-accent" />
              ) : (
                <Moon className="h-5 w-5 text-accent" />
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
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg md:hidden">
          <div className="flex flex-col space-y-4 p-4">
            <button
              onClick={toggleDarkMode}
              className="flex items-center space-x-2 text-text-secondary hover:text-text-primary"
            >
              {isDarkMode ? (
                <>
                  <Sun className="h-5 w-5" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="h-5 w-5" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
            <Link to="/login">
              <Button variant="outline" className="w-full">Log in</Button>
            </Link>
            <Link to="/signup">
              <Button className="w-full">Sign up</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};