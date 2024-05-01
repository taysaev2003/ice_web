import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from '../../pages/CartPage/Cart.module.scss';
import { setAddressError } from '../../redux/errorsSlice';
import { setAddress } from '../../redux/deliverySlice';

const Addres = () => {
  const dispatch = useDispatch();
  const { itemsPrice } = useSelector((state) => state.items);
  const { addressIsFalse } = useSelector((state) => state.errors);
  const { phone } = useSelector((s) => s.phone);
  const { address } = useSelector((s) => s.delmethod);
  const [addressNotFound, setAddressNotFound] = useState(false);
  const addressRef = useRef(null);
  const [addressState, setAddressState] = useState('');

  const handleChangeInput = (e) => {
    setAddressState(e);
  };

  const handleSetAddress = () => {
    if (addressState !== '') {
      dispatch(setAddress(addressState));
      dispatch(setAddressError(false));
    }
  };

  const handleAddressNull = () => {
    dispatch(setAddress(false));
    setAddressState('');
  };

  const haldleInputOnClick = () => {
    dispatch(setAddressError(null));
    setAddressNotFound(false);
  };

  useEffect(() => {
    if (addressIsFalse && phone) {
      addressRef.current.focus();
    }
  }, [addressIsFalse]);

  return (
    <div className="input-wrapper">
      <div className={styles.adress}>
        <div className={styles.adress__text}>
          <p>
            Введите ваш адресс <span className={styles.required}>*</span>
          </p>
        </div>
        <div className={styles.adress__list}>
          <div className={styles.adress__input}>
            <div className={styles.adress__input__icon}>
              <svg
                width="9"
                height="13"
                viewBox="0 0 9 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.33226 0.835482C3.6978 0.0420465 5.37627 0.0559145 6.72899 0.871809C8.06841 1.70432 8.88248 3.19011 8.8749 4.7884C8.84372 6.37621 7.97081 7.86875 6.87967 9.02256C6.2499 9.6915 5.54538 10.283 4.78053 10.785C4.70175 10.8306 4.61547 10.8611 4.52593 10.875C4.43975 10.8713 4.35582 10.8459 4.28172 10.8009C3.11402 10.0466 2.08958 9.08377 1.25771 7.95873C0.561618 7.0196 0.166147 5.885 0.125001 4.70901C0.124097 3.10765 0.966729 1.62892 2.33226 0.835482ZM3.12135 5.37174C3.35105 5.93802 3.89324 6.3074 4.49475 6.30741C4.88882 6.31024 5.26762 6.15239 5.54676 5.86905C5.8259 5.5857 5.98218 5.2004 5.98078 4.79899C5.98288 4.18627 5.62216 3.6327 5.06704 3.39673C4.51192 3.16077 3.8719 3.28897 3.44582 3.72147C3.01974 4.15397 2.89165 4.80545 3.12135 5.37174Z"
                  fill="#2ab79d"
                />
                <ellipse
                  cx="4.5"
                  cy="12.125"
                  rx="3.125"
                  ry="0.625"
                  fill="#2ab79d"
                />
              </svg>
            </div>
            <input
              className={styles.input}
              id="address"
              placeholder="ул. Куйбышева  53"
              value={addressState}
              onChange={(e) => {
                handleChangeInput(e.target.value);
              }}
              onClick={haldleInputOnClick}
              ref={addressRef}
            />
          </div>
          {address ? (
            <button
              className={`${styles.adress__button} ${
                itemsPrice === 0 ? styles.inactiveButton : ''
              }`}
              onClick={handleAddressNull}
              disabled={itemsPrice === 0}
            >
              Изменить
            </button>
          ) : (
            <button
              className={`${styles.adress__button} ${
                itemsPrice === 0 ? styles.inactiveButton : ''
              }`}
              onClick={handleSetAddress}
              disabled={itemsPrice === 0}
            >
              Подтвердить
            </button>
          )}
        </div>

        <div className={styles.adress__info}>
          {addressIsFalse && !addressNotFound && (
            <div className={styles.cart__error}>Введите ваш адресс</div>
          )}
          {addressNotFound && (
            <div className={styles.cart__error}>{addressNotFound}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Addres;
