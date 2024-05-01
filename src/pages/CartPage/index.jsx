import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTelegram } from '../../hooks/useTelegram';

import styles from './Cart.module.scss';
import Phone from '../../components/CartPageComponents/Phone';
import PaymentMethod from '../../components/CartPageComponents/PaymentMethod';
import Comment from '../../components/CartPageComponents/Comment';
import EmptyCart from '../../components/CartPageComponents/EmptyCart';
import ItemsInCart from '../../components/CartPageComponents/ItemsInCart';
import { setPhoneError, setAddressError } from '../../redux/errorsSlice';
import Addres from '../../components/CartPageComponents/Addres';

const CartPage = () => {
  const { tg } = useTelegram();
  const dispatch = useDispatch();
  const { itemsInCart } = useSelector((state) => {
    const itemsCount = state.items.itemsInCart.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.id === item.id);
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
  const { address } = useSelector((state) => state.delmethod);
  const { itemsPrice } = useSelector((state) => state.items);
  const { phone } = useSelector((state) => state.phone);
  const { payMethod } = useSelector((state) => state.paymethod);
  const { comment } = useSelector((state) => state.comment);

  const onSendData = useCallback(() => {
    // Errors
    if (
      phoneIsFalse === null ||
      phoneIsFalse === true ||
      addressIsFalse === true ||
      addressIsFalse === null
    ) {
      if (phoneIsFalse === null || phoneIsFalse === true) {
        dispatch(setPhoneError(true));
      }
      if (addressIsFalse === null || addressIsFalse === null) {
        dispatch(setAddressError(true));
      }
      return;
    }

    const data = {
      itemsPrice,
      address,
      phone,
      payMethod,
      comment,
      itemsInCart: itemsInCart.map((item) => {
        const newItem = {
          name: item.name,
          price: item.price,
          count: item.count,
        };
        return newItem;
      }),
    };

    tg.sendData(JSON.stringify(data));
  }, [itemsPrice, address, phone, payMethod, comment, itemsInCart]);

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData);
    return () => {
      tg.offEvent('mainButtonClicked', onSendData);
    };
  }, [onSendData, tg]);

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
