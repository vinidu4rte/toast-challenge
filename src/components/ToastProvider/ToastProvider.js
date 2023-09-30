import React from 'react';
import useEscapeKey from '../../hooks/useEscapeKey';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  // toast = {id: String, variant: 'notice' | 'warning' | 'success' | 'error', message: String}
  const [toasts, setToasts] = React.useState([]);
  
  const value = React.useMemo(() => {
    function createToast(variant, message) {
      const newToast = {
        id: crypto.randomUUID(),
        variant,
        message,
      };
  
      setToasts([...toasts, newToast]);
    }
  
    function removeToast(id) {
      const updatedToasts = toasts.filter((item) => item.id !== id);
  
      setToasts([...updatedToasts]);
    }

    function removeAllToasts() {
      setToasts([]);
    }

    return {
      toasts,
      createToast,
      removeToast,
      removeAllToasts,
    }
  }, [toasts]);

  useEscapeKey(value.removeAllToasts);

  return <ToastContext.Provider value={value}>
    {children}
  </ToastContext.Provider>
}

export default ToastProvider;
