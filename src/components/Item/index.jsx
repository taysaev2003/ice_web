import styles from './Item.module.scss';

const Item = (item) => {
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

        <div className={styles.item__button}>
          <p>Добавить</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
