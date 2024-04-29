import { Link, useLocation } from 'react-router-dom';

import styles from './Navbar.module.scss';

const Navbar = () => {
  const { pathname } = useLocation();

  const navItems = [
    { path: '/', title: 'Все' },
    { path: '/stakan', title: 'Стаканчик' },
    { path: '/rojok', title: 'Рожок' },
    { path: '/eskimo', title: 'Эскимо' },
    { path: '/sandwich', title: 'Сэндвич' },
    { path: '/trub', title: 'Трубочка' },
    { path: '/ves', title: 'Весовое' },
  ];

  return (
    <div className={styles.nav}>
      <div className={styles.nav__inner}>
        <div className={styles.nav__list}>
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <div
                className={`${styles.nav__el} ${
                  pathname === item.path ? styles.nav__el_active : ''
                }`}
              >
                <p>{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
