import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const HeaderIcon = ({ pathname }) => {
  const homeIcon = (
    <div className={styles.header__cart}>
      <svg
        class="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  );
  const cartIcon = (
    <div className={styles.header__cart}>
      <svg
        class="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  );

  return (
    <div className={styles.header__cart__wrapper}>
      {pathname !== '/cart' ? (
        <Link to="/cart">{cartIcon}</Link>
      ) : (
        <Link to="/">{homeIcon}</Link>
      )}
    </div>
  );
};

HeaderIcon.propTypes = {
  pathname: PropTypes.string,
};

export default HeaderIcon;
