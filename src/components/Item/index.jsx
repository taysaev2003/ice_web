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

  useEffect(() => {
    console.log(itemsInCart);
  }, [itemsInCart]);

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
