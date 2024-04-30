import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Cart.module.scss';
import Phone from '../../components/CartPageComponents/Phone';
import PaymentMethod from '../../components/CartPageComponents/PaymentMethod';
import Comment from '../../components/CartPageComponents/Comment';
import EmptyCart from '../../components/CartPageComponents/EmptyCart';
import ItemsInCart from '../../components/CartPageComponents/ItemsInCart';
import { setPhoneError, setAddressError } from '../../redux/errorsSlice';
import Addres from '../../components/CartPageComponents/Addres';

const CartPage = () => {
  const dispatch = useDispatch();
  const { itemsInCart } = useSelector((state) => {
    const itemsCount = state.items.itemsInCart.reduce((acc, item) => {
      const existingItem = acc.find(
        (i) =>
          i.id === item.id &&
          i.price === item.price &&
          JSON.stringify(i.modifiers) === JSON.stringify(item.modifiers) &&
          JSON.stringify(i.modifiers) === JSON.stringify(item.modifiers) &&
          JSON.stringify(i?.changes) === JSON.stringify(item?.changes)
      );
      if (existingItem) {
        existingItem.count += 1;
      } else {
        acc.push({ ...item, count: 1 });
      }
      return acc;
    }, []);

    return { itemsInCart: itemsCount };
  });
  const { phoneIsFalse, addressIsFalse } = useSelector((state) => state.errors);
  const { address, delMethod } = useSelector((state) => state.delmethod);
  const { itemsPrice, delPrice } = useSelector((state) => state.items);
  const { phone } = useSelector((state) => state.phone);
  const { payMethod } = useSelector((state) => state.paymethod);
  const { comment } = useSelector((state) => state.comment);
  const { count } = useSelector((state) => state.count);

  return (
    <div className={styles.wrapper}>
      {itemsPrice === 0 ? (
        <EmptyCart />
      ) : (
        <ItemsInCart itemsInCart={itemsInCart} />
      )}

      <div className={styles.order__text}>
        <p>Оформление заказа</p>
      </div>
      <Phone />
      <PaymentMethod />
      <Addres />
      <Comment />
    </div>
  );
};

export default CartPage;
