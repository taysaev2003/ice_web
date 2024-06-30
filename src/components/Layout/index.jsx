import { useLocation, Outlet, useNavigate } from 'react-router-dom';
import Header from './Header/index';
import Navbar from './NavBar/index';
import { useDispatch, useSelector } from 'react-redux';
import { useTelegram } from '../../hooks/useTelegram';
import { setItOpen } from '../../utils/blur';
import { useEffect, useState } from 'react';
import moment from 'moment-timezone';

const Layout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { itemsPrice } = useSelector((s) => s.items);

  const { tg } = useTelegram();
  const mainButtonClick = () => {
    if (tg.MainButton.text === `Мой заказ: ${itemsPrice} ₽`) navigate('/cart');
  };
  tg.onEvent('mainButtonClicked', mainButtonClick);

  const { open } = useSelector((s) => s.blur);

  useEffect(() => {
    if (pathname === '/cart') dispatch(setItOpen(false));
  });

  const [cafeIsOpen, setCafeOpen] = useState(true);
  const localTimestamp = moment.tz('Europe/Moscow');
  const currentTime = localTimestamp.format('HH:mm');
  useEffect(() => {
    if (currentTime >= '9:00' && currentTime <= '19:00') {
      setCafeOpen(true);
    } else {
      setCafeOpen(true);
    }
  }, []);

  return (
    <main>
      <div className={`wrapper ${open && 'blur'}`}>
        {cafeIsOpen ? (
          <>
            <Header pathname={pathname} />
            {pathname !== '/cart' && <Navbar pathname={pathname} />}
            <Outlet />
          </>
        ) : (
          <div className="loading">
            <h2>Магазин Закрыт</h2>
            <h6>9.00 - 19.00</h6>
          </div>
        )}
      </div>
    </main>
  );
};

export default Layout;
