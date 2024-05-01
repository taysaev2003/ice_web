import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from '../../pages/CartPage/Cart.module.scss';
import { setComment } from '../../redux/commentSlice';

const Comment = () => {
  const dispatch = useDispatch();
  const { comment } = useSelector((s) => s.comment);
  const handlerCommentChange = (event) => {
    dispatch(setComment(event.target.value));
  };

  return (
    <div className={styles.comment}>
      <div className={styles.comment__text}>
        <p>Введите коментарий к заказу</p>
      </div>
      <div className={styles.comment__text}>
        <div className={styles.comment__icon}>
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
              d="M7.556 8.5h8m-8 3.5H12m7.111-7H4.89a.896.896 0 0 0-.629.256.868.868 0 0 0-.26.619v9.25c0 .232.094.455.26.619A.896.896 0 0 0 4.89 16H9l3 4 3-4h4.111a.896.896 0 0 0 .629-.256.868.868 0 0 0 .26-.619v-9.25a.868.868 0 0 0-.26-.619.896.896 0 0 0-.63-.256Z"
            />
          </svg>
        </div>
        <textarea
          name=""
          value={comment}
          onChange={handlerCommentChange}
          placeholder="Укажите любые дополнительные пожелания или особенности вашего заказа здесь"
          maxLength="200"
        ></textarea>
      </div>
    </div>
  );
};

export default Comment;
