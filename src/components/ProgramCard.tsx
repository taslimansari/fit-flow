import React from 'react';
import { Clock, TrendingUp, Star, ArrowRight } from 'lucide-react';
import { Program } from '../types';
import { useApp } from '../contexts/AppContext';
import { useAuth } from '../contexts/AuthContext';
import { useAlert } from '../contexts/AlertContext';

interface ProgramCardProps {
  program: Program;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  const { dispatch } = useApp();
  const { user } = useAuth();
  const { showAlert } = useAlert();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleSelect = () => {
    if (!user) {
      showAlert('info', '🔐 Sign In Required', 'Please sign in to select and book this amazing program. Join thousands of others on their fitness journey!');
      return;
    }
    showAlert('info', '🏋️ Program Selected!', `Great choice! "${program.title}" is now ready for booking. Complete your session details in the booking form.`);
    dispatch({ type: 'SELECT_PROGRAM', payload: program });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(program.difficulty)}`}>
            {program.difficulty}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1">
          <span className="text-sm font-bold text-gray-900">${program.price}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
            {program.category}
          </span>
          <div className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm text-gray-600 ml-1">4.8</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{program.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            {program.duration}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <TrendingUp className="w-4 h-4 mr-1" />
            {program.benefits.length} benefits
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Benefits:</h4>
            <div className="flex flex-wrap gap-1">
              {program.benefits.slice(0, 3).map((benefit, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                >
                  {benefit}
                </span>
              ))}
              {program.benefits.length > 3 && (
                <span className="text-xs text-blue-600">+{program.benefits.length - 3} more</span>
              )}
            </div>
          </div>

          <button
            onClick={handleSelect}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center group"
          >
            Select Program
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};