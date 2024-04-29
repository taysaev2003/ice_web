import React from 'react';

import styles from './ModalWindow.module.scss';

const ModalItemCount = ({ amount, countForCart, setCountForCart }) => {
  const counts = [{ count: 1 }, { count: 5 }, { count: 10 }];

  const updateCountForCard = (count) => {
    setCountForCart(countForCart + count);
  };

  return (
    <div className={styles.modal__size}>
      {counts.map((count, index) => (
        <div
          key={index}
          className={`${styles.size}`}
          onClick={() => {
            updateCountForCard(count.count);
          }}
        >
          <p>+{count.count} шт.</p>
        </div>
      ))}
    </div>
  );
};

export default ModalItemCount;
