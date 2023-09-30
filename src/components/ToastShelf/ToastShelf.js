import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, manageToasts}) {
  function removeToast(id) {
    const updatedToasts = toasts.filter((item) => item.id !== id);

    manageToasts([...updatedToasts]);
  }

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast variant={toast.variant} message={toast.message} onClose={() => removeToast(toast.id)}/>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
