import React from 'react';
import Button from '../Button/Button';
import './Header.css';
import useTelega from '../../hooks/UseTelegram'

const Header = () => {
  const { user, onClose } = useTelega();
  return(
    <div className='header'>
      <Button onClick={onClose}>Close</Button>
      <span className='username'>
        {user?.username}
      </span>
    </div>
  )
}

export default Header;