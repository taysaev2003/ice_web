import React from 'react';
import { Box, Fade, Modal } from '@mui/material';

import styles from './ModalWindow.module.scss';
import ModalItemCount from './ModalItemCount';
import ModalItemKorobka from './ModalItemKorobka';

const ModalWindow = ({
  open,
  setOpen,
  item,
  addItemInCart,
  setCountForCart,
  countForCart,
  updateItemForCart,
}) => {
  const handleClose = () => {
    setOpen(false);
    setCountForCart(1);
  };

  const updateCountForCard = (count) => {
    if (count < 0 && countForCart + count <= 0) {
      setCountForCart(1);
    } else if (countForCart === 1 && count !== 1) {
      setCountForCart(count);
    } else {
      setCountForCart(countForCart + count);
    }
  };

  const handleModalAddItems = () => {
    setOpen(false);
    addItemInCart(item);
    setCountForCart(1);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Fade in={open} timeout={{ enter: 500 }}>
        <Box
          sx={{
            outline: '0',
          }}
        >
          <div className={styles.modal}>
            <div className={styles.modal__close__btn} onClick={handleClose}>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            </div>
            <div className={styles.modal__image}>
              <img
                src={
                  `https://server.tg-delivery.ru/api/icecream/image/` +
                  item?.image
                }
                alt="imageee"
              />
            </div>
            <div className={styles.modal__info}>
              <div className={styles.modal__name}>
                <div className={styles.modal__info__item}>
                  <div className={styles.modal__info__name}>{item.name}</div>
                </div>
              </div>
              <div className={styles.modal__amount}>
                <div
                  className={styles.modal__amount__minus}
                  onClick={() => {
                    if (countForCart !== 1)
                      setCountForCart((prevCount) => prevCount - 1);
                    else handleClose();
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.85046 6H6.14581H14.1471C15.1693 6 16 6.89664 16 8C16 9.10336 15.1693 10 14.1471 10H9.84921H6.14581H1.85046C0.828229 10 0 9.10336 0 8C0 6.89664 0.828229 6 1.85046 6Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className={styles.modal__amount__count}>
                  <p>{countForCart}</p>
                </div>
                <div
                  className={styles.modal__amount__plus}
                  onClick={() => setCountForCart((prevCount) => prevCount + 1)}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.1471 6.1483H9.84921V1.85295C9.84921 0.830716 9.02099 0 7.99876 0C6.97653 0 6.14581 0.830716 6.14581 1.85295V6.1483H1.85046C0.828229 6.1483 0 6.97901 0 8.00124C0 9.02347 0.828229 9.85419 1.85046 9.85419H6.14581V14.1471C6.14581 15.1693 6.97653 16 7.99876 16C9.02099 16 9.84921 15.1693 9.84921 14.1471V9.85419H14.1471C15.1693 9.85419 16 9.02347 16 8.00124C16 6.97901 15.1693 6.1483 14.1471 6.1483Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <ModalItemCount
              updateItemForCart={updateItemForCart}
              updateCountForCard={updateCountForCard}
            />

            <ModalItemKorobka
              amount={item.amount}
              updateCountForCard={updateCountForCard}
            />

            <div className={styles.modal__button} onClick={handleModalAddItems}>
              <p>Добавить за {countForCart * updateItemForCart.price} ₽</p>
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalWindow;
