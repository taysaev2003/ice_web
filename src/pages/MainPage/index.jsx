import PropTypes from 'prop-types';

import Item from '../../components/Item';
import { Skeleton } from '../../components/Layout/Skeleton';
import styles from './MainPage.module.scss';
import stylesForSkeleton from '../../components/Item/Item.module.scss';
import { useSelector } from 'react-redux';

const MainPage = ({ items }) => {
  const { isLoading } = useSelector((s) => s.items);
  const categories = [
    { id: 0, title: 'Стаканчики' },
    { id: 1, title: 'Рожки' },
    { id: 2, title: 'Эскимо' },
    { id: 3, title: 'Сэндвичи' },
    { id: 5, title: 'Трубочки' },
    { id: 4, title: 'Весовое' },
  ];

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton className={stylesForSkeleton.skeleton} key={index} />
  ));

  return (
    <div className={styles.main}>
      {isLoading ? (
        <div className={stylesForSkeleton.wrapper}>{skeletons}</div>
      ) : (
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
      )}
    </div>
  );
};

MainPage.propTypes = {
  items: PropTypes.array,
};

export default MainPage;
