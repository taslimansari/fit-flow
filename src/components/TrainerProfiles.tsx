import React, { useMemo } from 'react';
import { TrainerCard } from './TrainerCard';
import { trainers } from '../data/trainers';
import { useApp } from '../contexts/AppContext';

export const TrainerProfiles: React.FC = () => {
  const { state } = useApp();

  const filteredTrainers = useMemo(() => {
    return trainers.filter(trainer => {
      const matchesSearch = trainer.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
                           trainer.specialty.toLowerCase().includes(state.searchTerm.toLowerCase());
      return matchesSearch;
    });
  }, [state.searchTerm]);

  return (
    <section className="py-20 bg-white" id="trainers">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Expert Trainers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Work with certified professionals who are passionate about helping you achieve your fitness goals.
          </p>
        </div>

        {filteredTrainers.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">👨‍💼</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No trainers found</h3>
            <p className="text-gray-600">Try adjusting your search criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredTrainers.map((trainer) => (
              <TrainerCard key={trainer.id} trainer={trainer} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};