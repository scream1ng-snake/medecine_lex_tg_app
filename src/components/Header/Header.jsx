import React from 'react';
import Button from '../Button';
import './Header.css';

const Header = () => {
  const tg = window.Telegram.WebApp;
  
  React.useEffect(() => {
    tg.ready()
  }, [])

  function onClose() {
    tg.close();
  }
  return(
    <div className='header'>
      <Button onClick={onClose}>Close</Button>
      <span className='username'>
        {tg.initDataUnsafe?.user?.username}
      </span>
    </div>
  )
}

export default Header;