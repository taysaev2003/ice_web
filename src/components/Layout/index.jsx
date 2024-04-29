import { useLocation, Outlet } from 'react-router-dom';
import Header from './Header/index';
import Navbar from './NavBar/index';
import { useSelector } from 'react-redux';

const Layout = () => {
  const { pathname } = useLocation();

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
