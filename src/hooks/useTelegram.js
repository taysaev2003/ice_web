import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export function useTelegram() {
  const [pathName, setPathName] = useState('/');
  useEffect(() => {
    setPathName(window.location.pathname);
  }, [window.location.pathname]);

  const { itemsPrice } = useSelector((state) => state.items);

  const tg = window.Telegram.WebApp;
  tg.MainButton.textColor = '#ffffff';
  tg.MainButton.color = '#1f497d';
  tg.setHeaderColor('#f9f9f9');
  tg.setBackgroundColor('#f9f9f9');
  tg.enableClosingConfirmation();

  useEffect(() => {
    totalPriceButton();
  }, [pathName, itemsPrice]);

  const totalPriceButton = () => {
    if (itemsPrice !== 0) {
      if (pathName !== '/cart') {
        tg.MainButton.show();
        tg.MainButton.setText(`Мой заказ: ${itemsPrice} ₽`);
      }
      if (pathName === '/cart') {
        tg.MainButton.setText(`Заказать: ${itemsPrice} ₽`);
      }
    } else {
      tg.MainButton.hide();
    }
  };

  return {
    totalPriceButton,
    tg,
  };
}
