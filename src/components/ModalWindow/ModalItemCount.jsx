import React from 'react';

import AddItemsCount from './itemsCounts/AddItemsCount';
import DeleteItemsCount from './itemsCounts/DeleteItemsCount';

const ModalItemCount = ({ updateItemForCart, updateCountForCard }) => {
  const counts = [{ count: 1 }, { count: 5 }, { count: 10 }];

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
