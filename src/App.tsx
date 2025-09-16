import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { AppProvider } from './contexts/AppContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { FilterBar } from './components/FilterBar';
import { WorkoutPrograms } from './components/WorkoutPrograms';
import { TrainerProfiles } from './components/TrainerProfiles';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <div className="min-h-screen bg-white">
          <Navigation />
          <Hero />
          <FilterBar />
          <WorkoutPrograms />
          <TrainerProfiles />
          <Testimonials />
          <Contact />
          <Footer />
          <BookingModal />
        </div>
      </AppProvider>
    </AuthProvider>
  );
}

export default App;