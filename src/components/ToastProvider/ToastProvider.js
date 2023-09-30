import React from 'react';

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

    return {
      toasts,
      createToast,
      removeToast,
    }
  }, [toasts])  

  return <ToastContext.Provider value={value}>
    {children}
  </ToastContext.Provider>
}

export default ToastProvider;
