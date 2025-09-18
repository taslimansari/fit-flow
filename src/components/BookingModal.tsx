import React, { useState } from 'react';
import { X, Calendar, Clock, User, CreditCard } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { useAuth } from '../contexts/AuthContext';
import { useAlert } from '../contexts/AlertContext';

export const BookingModal: React.FC = () => {
  const { state, dispatch } = useApp();
  const { user } = useAuth();
  const { showAlert } = useAlert();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { selectedProgram, selectedTrainer, showBookingModal } = state;

  if (!showBookingModal || (!selectedProgram && !selectedTrainer)) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      showAlert('error', '🔐 Authentication Required', 'Please sign in to book a session');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate booking process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const booking = {
        id: crypto.randomUUID(),
        userId: user.id,
        trainerId: selectedTrainer?.id,
        programId: selectedProgram?.id,
        date: selectedDate,
        time: selectedTime,
        status: 'pending' as const,
        notes
      };

      dispatch({ type: 'ADD_BOOKING', payload: booking });
      dispatch({ type: 'TOGGLE_BOOKING_MODAL' });
      dispatch({ type: 'CLEAR_SELECTION' });
      
      // Here you would typically save to database
      const itemType = selectedProgram ? 'program' : 'training session';
      const itemName = selectedProgram?.title || selectedTrainer?.name || '';
      showAlert('success', '🎉 Booking Confirmed!', `Your ${itemType} "${itemName}" has been successfully booked for ${selectedDate} at ${selectedTime}.`);
    } catch (error) {
      console.error('Booking failed:', error);
      showAlert('error', '❌ Booking Failed', 'Something went wrong while processing your booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const item = selectedProgram || selectedTrainer;
  const price = selectedProgram?.price || selectedTrainer?.price || 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
        <button
          onClick={() => dispatch({ type: 'TOGGLE_BOOKING_MODAL' })}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Book Your Session</h2>
          <p className="text-gray-600">
            {selectedProgram ? `Program: ${item?.title}` : `Trainer: ${item?.name}`}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="w-4 h-4 inline mr-2" />
              Select Date
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock className="w-4 h-4 inline mr-2" />
              Select Time
            </label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Choose time slot</option>
              <option value="09:00">9:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="14:00">2:00 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="16:00">4:00 PM</option>
              <option value="17:00">5:00 PM</option>
              <option value="18:00">6:00 PM</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Special Notes (Optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any special requirements or goals..."
              rows={3}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-900">Total Price:</span>
              <span className="text-2xl font-bold text-blue-600">${price}</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center disabled:opacity-50"
          >
            <CreditCard className="w-5 h-5 mr-2" />
            {isSubmitting ? 'Processing...' : 'Book Now'}
          </button>
        </form>
      </div>
    </div>
  );
};