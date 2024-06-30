import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTelegram } from './hooks/useTelegram';

import Layout from './components/Layout';
import MainPage from './pages/MainPage/index';
import CartPage from './pages/CartPage';
import Categories from './pages/CategoryPage';
import { useEffect } from 'react';
import { getItems } from './redux/itemsSlice';

function App() {
  const dispatch = useDispatch();

  const { tg } = useTelegram();
  useEffect(() => {
    tg.ready();
    tg.expand();
  }, []);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const { items } = useSelector((s) => s.items);

  const categoryesData = [
    { path: '/stakan', category: 0 },
    { path: '/rojok', category: 1 },
    { path: '/eskimo', category: 2 },
    { path: '/sandwich', category: 3 },
    { path: '/ves', category: 4 },
    { path: '/briket', category: 6 },
    { path: '/trub', category: 5 },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage items={items} />} />
          {categoryesData.map((cat) => (
            <Route
              key={cat.category}
              path={cat.path}
              element={
                <Categories
                  items={items.filter((item) => item.category === cat.category)}
                />
              }
            />
          ))}
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
