import React from 'react';

import styles from './ModalWindow.module.scss';

const ModalItemKorobka = ({ amount, updateCountForCard }) => {
  return (
    <div className={styles.modal__size}>
      <div
        className={`${styles.size}`}
        onClick={() => {
          updateCountForCard(amount);
        }}
      >
        <p>
          <span className={styles.size__add}>+</span>
          {amount} шт. (Коробка)
        </p>
      </div>
    </div>
  );
};

export default ModalItemKorobka;
