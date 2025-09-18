import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { AlertProvider } from './contexts/AlertContext';
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
import { AlertContainer } from './components/ui/AlertContainer';

function App() {
  return (
    <AuthProvider>
      <AlertProvider>
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
            <AlertContainer />
          </div>
        </AppProvider>
      </AlertProvider>
    </AuthProvider>
  );
}

export default App;