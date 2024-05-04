import React from 'react';

import styles from '../ModalWindow.module.scss';

const AddItemsCount = ({ updateItemForCart, updateCountForCard, counts }) => {
  return (
    <div className={styles.modal__size}>
      {updateItemForCart.category !== 4 ? (
        counts.map((count, index) => (
          <div
            key={index}
            className={`${styles.size}`}
            onClick={() => {
              updateCountForCard(count.count);
            }}
          >
            <p>
              <span className={styles.size__add}>+{count.count} </span>шт.
            </p>
          </div>
        ))
      ) : (
        <div
          className={`${styles.size}`}
          onClick={() => {
            updateCountForCard(1);
          }}
        >
          <p>+1 шт.</p>
        </div>
      )}
    </div>
  );
};

export default AddItemsCount;
