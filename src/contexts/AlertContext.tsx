import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AlertData {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
}

interface AlertContextType {
  alerts: AlertData[];
  showAlert: (type: 'success' | 'error' | 'info', title: string, message: string) => void;
  removeAlert: (id: string) => void;
}

const AlertContext = createContext<AlertContextType | null>(null);

export const AlertProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [alerts, setAlerts] = useState<AlertData[]>([]);

  const showAlert = (type: 'success' | 'error' | 'info', title: string, message: string) => {
    const id = crypto.randomUUID();
    const newAlert: AlertData = { id, type, title, message };
    
    setAlerts(prev => [...prev, newAlert]);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      removeAlert(id);
    }, 5000);
  };

  const removeAlert = (id: string) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  return (
    <AlertContext.Provider value={{ alerts, showAlert, removeAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
};