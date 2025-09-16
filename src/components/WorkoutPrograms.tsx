import React, { useMemo } from 'react';
import { ProgramCard } from './ProgramCard';
import { programs } from '../data/programs';
import { useApp } from '../contexts/AppContext';

export const WorkoutPrograms: React.FC = () => {
  const { state } = useApp();

  const filteredPrograms = useMemo(() => {
    return programs.filter(program => {
      const matchesCategory = state.filterCategory === 'All' || program.category === state.filterCategory;
      const matchesSearch = program.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
                           program.description.toLowerCase().includes(state.searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [state.filterCategory, state.searchTerm]);

  return (
    <section className="py-20 bg-gray-50" id="programs">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the perfect workout program tailored to your fitness goals and experience level.
          </p>
        </div>

        {filteredPrograms.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No programs found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};