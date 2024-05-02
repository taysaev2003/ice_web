import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import styles from './Item.module.scss';
import ButtonInCart from './ButtonInCart';
import ModalWindow from '../ModalWindow/index';
import { addItem, removeItem } from '../../redux/itemsSlice';
import { setItOpen } from '../../utils/blur';

const Item = (item) => {
  const dispatch = useDispatch();
  const { itemsInCart } = useSelector((state) => state.items);
  const inCart = itemsInCart.find((itemInCart) => itemInCart.id === item.id);
  const [updateItemForCart, setUpdateItemForCart] = useState(item);
  const [countForCart, setCountForCart] = useState(1);
  const itemList = itemsInCart.filter(
    (itemInCart) => itemInCart.id === item.id
  );
  const [open, setOpen] = useState(false);
  useEffect(() => {
    dispatch(setItOpen(open));
  }, [open, dispatch]);

  const handleModalOpen = (itemToCart) => {
    setUpdateItemForCart(itemToCart);
    setOpen(true);
  };

  const addItemInCart = (itemToCart) => {
    for (let i = 0; i < countForCart; i++) {
      const newItem = {
        idInCart: uuidv4(),
        ...updateItemForCart,
      };
      dispatch(addItem(newItem));
    }
  };

  const removeItemInCart = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img
          src={
            `https://server.tg-delivery.ru/api/icecream/image/` + item?.image
          }
          alt=""
        />
      </div>
      <div className={styles.item__wrapper}>
        <div className={styles.item__info}>
          <div className={styles.item__title}>
            <p>{item.name}</p>
          </div>
          <div className={styles.item__price}>
            <p>{item.price} ₽</p>
          </div>
        </div>
        {inCart ? (
          <ButtonInCart
            handleModalOpen={handleModalOpen}
            removeItemInCart={removeItemInCart}
            itemList={itemList}
            setOpen={setOpen}
            item={item}
          />
        ) : (
          <div
            className={styles.item__button}
            onClick={() => handleModalOpen(item)}
          >
            <p>Добавить</p>
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.268 6A2 2 0 0 0 14 9h1v1a2 2 0 0 0 3.04 1.708l-.311 1.496a1 1 0 0 1-.979.796H8.605l.208 1H16a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L4.686 5H4a1 1 0 0 1 0-2h1.5a1 1 0 0 1 .979.796L6.939 6h5.329Z" />
              <path d="M18 4a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0V8h2a1 1 0 1 0 0-2h-2V4Z" />
            </svg>
          </div>
        )}
      </div>

      {open && (
        <ModalWindow
          open={open}
          setOpen={setOpen}
          item={item}
          addItemInCart={addItemInCart}
          countForCart={countForCart}
          setCountForCart={setCountForCart}
          updateItemForCart={updateItemForCart}
          setUpdateItemForCart={setUpdateItemForCart}
        />
      )}
    </div>
  );
};

export default Item;
