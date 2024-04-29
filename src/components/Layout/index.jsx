import { useLocation, Outlet } from 'react-router-dom';
import Header from './Header/index';
import Navbar from './NavBar/index';

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <main>
      <div className="wrapper">
        <Header pathname={pathname} />
        {pathname !== '/cart' && <Navbar pathname={pathname} />}

        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
