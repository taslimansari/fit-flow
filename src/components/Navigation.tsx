import React, { useState } from 'react';
import { Menu, X, Dumbbell, User, Calendar } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { AuthModal } from './auth/AuthModal';

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const { user, signOut } = useAuth();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleSignIn = () => {
    setAuthMode('signin');
    setShowAuthModal(true);
  };

  const handleGetStarted = () => {
    setAuthMode('signup');
    setShowAuthModal(true);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">FitFlow</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
            >
              Programs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('trainers')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
            >
              Trainers
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
            >
              Reviews
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </button>
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-gray-600" />
                  <span className="text-sm text-gray-700">
                    {user.user_metadata?.name || user.email}
                  </span>
                </div>
                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Calendar className="w-5 h-5" />
                </button>
                <button
                  onClick={signOut}
                  className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <button 
                  onClick={handleSignIn}
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Sign In
                </button>
                <button 
                  onClick={handleGetStarted}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  Get Started
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('programs')}
                className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection('trainers')}
                className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                Trainers
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                Contact
              </button>
              
              {user ? (
                <div className="px-4 py-2 border-t border-gray-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <User className="w-5 h-5 text-gray-600" />
                    <span className="text-sm text-gray-700">
                      {user.user_metadata?.name || user.email}
                    </span>
                  </div>
                  <button
                    onClick={signOut}
                    className="w-full text-left px-2 py-1 text-red-600 hover:bg-red-50 rounded"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="px-4 py-2 border-t border-gray-200 space-y-2">
                  <button 
                    onClick={handleSignIn}
                    className="w-full text-left px-2 py-1 text-gray-700 hover:text-blue-600"
                  >
                    Sign In
                  </button>
                  <button 
                    onClick={handleGetStarted}
                    className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-center"
                  >
                    Get Started
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      </nav>
      
      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode={authMode}
      />
    </>
  );
};