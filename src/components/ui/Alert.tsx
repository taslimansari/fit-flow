import React, { useEffect } from 'react';
import { CheckCircle, AlertCircle, X, Info } from 'lucide-react';

interface AlertProps {
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
  isVisible: boolean;
  onClose: () => void;
  autoClose?: boolean;
  duration?: number;
}

export const Alert: React.FC<AlertProps> = ({
  type,
  title,
  message,
  isVisible,
  onClose,
  autoClose = true,
  duration = 4000
}) => {
  useEffect(() => {
    if (isVisible && autoClose) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, autoClose, duration, onClose]);

  if (!isVisible) return null;

  const getAlertStyles = () => {
    switch (type) {
      case 'success':
        return {
          container: 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 shadow-lg shadow-green-100',
          icon: <CheckCircle className="w-6 h-6 text-green-600" />,
          progress: 'bg-gradient-to-r from-green-500 to-emerald-500',
          titleColor: 'text-green-800',
          messageColor: 'text-green-700'
        };
      case 'error':
        return {
          container: 'bg-gradient-to-r from-red-50 to-rose-50 border-red-200 shadow-lg shadow-red-100',
          icon: <AlertCircle className="w-6 h-6 text-red-600" />,
          progress: 'bg-gradient-to-r from-red-500 to-rose-500',
          titleColor: 'text-red-800',
          messageColor: 'text-red-700'
        };
      case 'info':
        return {
          container: 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 shadow-lg shadow-blue-100',
          icon: <Info className="w-6 h-6 text-blue-600" />,
          progress: 'bg-gradient-to-r from-blue-500 to-indigo-500',
          titleColor: 'text-blue-800',
          messageColor: 'text-blue-700'
        };
      default:
        return {
          container: 'bg-gradient-to-r from-gray-50 to-slate-50 border-gray-200 shadow-lg',
          icon: <Info className="w-6 h-6 text-gray-600" />,
          progress: 'bg-gradient-to-r from-gray-500 to-slate-500',
          titleColor: 'text-gray-800',
          messageColor: 'text-gray-700'
        };
    }
  };

  const styles = getAlertStyles();

  return (
    <div className="fixed top-20 right-4 z-50 animate-in slide-in-from-right duration-300">
      <div className={`border rounded-xl shadow-xl p-5 max-w-sm w-full ${styles.container} relative overflow-hidden backdrop-blur-sm`}>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 p-1">
            {styles.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className={`text-sm font-bold mb-1 ${styles.titleColor}`}>{title}</h4>
            <p className={`text-sm ${styles.messageColor} leading-relaxed`}>{message}</p>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 p-1.5 hover:bg-white hover:bg-opacity-50 rounded-full transition-all duration-200 group"
          >
            <X className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
          </button>
        </div>
        
        {autoClose && (
          <div className="absolute bottom-0 left-0 h-1 bg-white bg-opacity-30 w-full">
            <div 
              className={`h-full ${styles.progress} transition-all duration-100`}
              style={{
                animation: `progress ${duration}ms linear forwards`
              }}
            />
          </div>
        )}
      </div>
      
      <style jsx>{`
        @keyframes progress {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
};