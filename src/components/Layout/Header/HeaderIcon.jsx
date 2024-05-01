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
        width="28"
        height="30"
        viewBox="0 0 28 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="27.2222" height="30" fill="url(#pattern0_7_747)" />
        <defs>
          <pattern
            id="pattern0_7_747"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_7_747"
              transform="matrix(0.00860969 0 0 0.0078125 -0.0510204 0)"
            />
          </pattern>
          <image
            id="image0_7_747"
            width="128"
            height="128"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
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
