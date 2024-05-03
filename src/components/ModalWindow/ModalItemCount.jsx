import React from 'react';

import styles from './ModalWindow.module.scss';
import AddItemsCount from './itemsCounts/AddItemsCount';
import DeleteItemsCount from './itemsCounts/DeleteItemsCount';

const ModalItemCount = ({ updateItemForCart, updateCountForCard }) => {
  const counts = [{ count: 1 }, { count: 5 }, { count: 10 }];

  const addItemsCount = (
    <>
      {updateItemForCart.category !== 4 ? (
        counts.map((count, index) => (
          <div
            key={index}
            className={`${styles.size}`}
            onClick={() => {
              updateCountForCard(count.count);
            }}
          >
            <p>+{count.count} шт.</p>
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
    </>
  );

  const deleteItemsCount = (
    <>
      {updateItemForCart.category !== 4 ? (
        counts.map((count, index) => (
          <div
            key={index}
            className={`${styles.size}`}
            onClick={() => {
              updateCountForCard(-count.count);
            }}
          >
            <p>-{count.count} шт.</p>
          </div>
        ))
      ) : (
        <div
          className={`${styles.size}`}
          onClick={() => {
            updateCountForCard(-1);
          }}
        >
          <p>-1 шт.</p>
        </div>
      )}
    </>
  );

  return (
    <>
      <AddItemsCount
        updateItemForCart={updateItemForCart}
        updateCountForCard={updateCountForCard}
        counts={counts}
      />
      <DeleteItemsCount
        updateItemForCart={updateItemForCart}
        updateCountForCard={updateCountForCard}
        counts={counts}
      />
    </>
  );
};

export default ModalItemCount;
