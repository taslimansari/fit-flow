import React from 'react';
import { Star, Award, Calendar, ArrowRight } from 'lucide-react';
import { Trainer } from '../types';
import { useApp } from '../contexts/AppContext';
import { useAuth } from '../contexts/AuthContext';
import { useAlert } from '../contexts/AlertContext';

interface TrainerCardProps {
  trainer: Trainer;
}

export const TrainerCard: React.FC<TrainerCardProps> = ({ trainer }) => {
  const { dispatch } = useApp();
  const { user } = useAuth();
  const { showAlert } = useAlert();

  const handleSelect = () => {
    if (!user) {
      showAlert('info', '🔐 Sign In Required', 'Please sign in to book a session with our expert trainers. Your fitness transformation awaits!');
      return;
    }
    showAlert('info', '👨‍💼 Trainer Selected!', `Excellent choice! ${trainer.name} is ready to guide your fitness journey. Complete your booking details next.`);
    dispatch({ type: 'SELECT_TRAINER', payload: trainer });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative h-64 overflow-hidden">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1">
          <span className="text-sm font-bold text-gray-900">${trainer.price}/session</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900">{trainer.name}</h3>
          <div className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm text-gray-600 ml-1">{trainer.rating}</span>
          </div>
        </div>

        <p className="text-blue-600 font-medium mb-2">{trainer.specialty}</p>
        <p className="text-gray-600 text-sm mb-4">{trainer.experience} experience</p>
        <p className="text-gray-700 mb-4 line-clamp-3">{trainer.bio}</p>

        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
              <Award className="w-4 h-4 mr-1" />
              Certifications:
            </h4>
            <div className="flex flex-wrap gap-1">
              {trainer.certifications.map((cert, index) => (
                <span
                  key={index}
                  className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              Available:
            </h4>
            <div className="flex flex-wrap gap-1">
              {trainer.availability.map((day, index) => (
                <span
                  key={index}
                  className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
                >
                  {day}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={handleSelect}
            className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center group"
          >
            Book Trainer
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};