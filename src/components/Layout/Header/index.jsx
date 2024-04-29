import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import HeaderIcon from './HeaderIcon';

const Header = ({ pathname }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__inner}>
          <div className={styles.header__inner__logo}>
            <Link to="/">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="100" height="100" fill="url(#pattern0_7_746)" />
                <defs>
                  <pattern
                    id="pattern0_7_746"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use xlinkHref="#image0_7_746" transform="scale(0.01)" />
                  </pattern>
                  <image
                    id="image0_7_746"
                    width="100"
                    height="100"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </Link>
          </div>
          <HeaderIcon pathname={pathname} />
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  pathname: PropTypes.string,
};

export default Header;
