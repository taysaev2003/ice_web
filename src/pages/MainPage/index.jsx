import PropTypes from 'prop-types';

import Item from '../../components/Item';
import styles from './MainPage.module.scss';

const MainPage = ({ items }) => {
  const categories = [
    { id: 0, title: 'Стаканчики' },
    { id: 1, title: 'Рожки' },
    { id: 2, title: 'Эскимо' },
    { id: 3, title: 'Сэндвичи' },
    { id: 5, title: 'Трубочки' },
    { id: 4, title: 'Весовое' },
  ];

  return (
    <div className={styles.main}>
      <>
        {categories.map((category, id) => (
          <div key={id} className={styles.main__category}>
            <div
              className={`${styles.main__title} ${
                category.id !== 0 && styles.marg_bot
              }`}
            >
              <p>{category.title}</p>
            </div>
            <div className={styles.main__list}>
              {items
                .filter((item) => item.category === category.id)
                .map((item, id) => (
                  <Item key={id} {...item} />
                ))}
            </div>
          </div>
        ))}
      </>
    </div>
  );
};

MainPage.propTypes = {
  items: PropTypes.array,
};

export default MainPage;
