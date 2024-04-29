import React from 'react';

import styles from './ModalWindow.module.scss';

const ModalItemKorobka = ({ amount, countForCart, setCountForCart }) => {
  const counts = [{ count: 1 }, { count: 5 }, { count: 10 }];

  const updateCountForCard = (count) => {
    setCountForCart(countForCart + count);
  };

  return (
    <div className={styles.modal__size}>
      <div
        className={`${styles.size}`}
        onClick={() => {
          updateCountForCard(amount);
        }}
      >
        <p>+{amount} шт. (Коробка)</p>
      </div>
    </div>
  );
};

export default ModalItemKorobka;
