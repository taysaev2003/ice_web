import { useLocation, Outlet, useNavigate } from 'react-router-dom';
import Header from './Header/index';
import Navbar from './NavBar/index';
import { useSelector } from 'react-redux';
import { useTelegram } from '../../hooks/useTelegram';

const Layout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { itemsPrice } = useSelector((s) => s.items);

  const { tg } = useTelegram();
  const mainButtonClick = () => {
    if (tg.MainButton.text === `Мой заказ: ${itemsPrice} ₽`) navigate('/cart');
  };
  tg.onEvent('mainButtonClicked', mainButtonClick);

  const { open } = useSelector((s) => s.blur);

  return (
    <main>
      <div className={`wrapper ${open && 'blur'}`}>
        <Header pathname={pathname} />
        {pathname !== '/cart' && <Navbar pathname={pathname} />}

        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
