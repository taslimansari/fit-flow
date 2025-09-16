import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Program, Trainer, Booking } from '../types';

interface AppState {
  selectedProgram: Program | null;
  selectedTrainer: Trainer | null;
  bookings: Booking[];
  showBookingModal: boolean;
  filterCategory: string;
  searchTerm: string;
}

type AppAction =
  | { type: 'SELECT_PROGRAM'; payload: Program }
  | { type: 'SELECT_TRAINER'; payload: Trainer }
  | { type: 'ADD_BOOKING'; payload: Booking }
  | { type: 'TOGGLE_BOOKING_MODAL' }
  | { type: 'SET_FILTER_CATEGORY'; payload: string }
  | { type: 'SET_SEARCH_TERM'; payload: string }
  | { type: 'CLEAR_SELECTION' };

const initialState: AppState = {
  selectedProgram: null,
  selectedTrainer: null,
  bookings: [],
  showBookingModal: false,
  filterCategory: 'All',
  searchTerm: '',
};

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SELECT_PROGRAM':
      return { ...state, selectedProgram: action.payload, showBookingModal: true };
    case 'SELECT_TRAINER':
      return { ...state, selectedTrainer: action.payload, showBookingModal: true };
    case 'ADD_BOOKING':
      return { ...state, bookings: [...state.bookings, action.payload] };
    case 'TOGGLE_BOOKING_MODAL':
      return { ...state, showBookingModal: !state.showBookingModal };
    case 'SET_FILTER_CATEGORY':
      return { ...state, filterCategory: action.payload };
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    case 'CLEAR_SELECTION':
      return { ...state, selectedProgram: null, selectedTrainer: null, showBookingModal: false };
    default:
      return state;
  }
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};