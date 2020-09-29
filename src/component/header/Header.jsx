import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/' className='logo__container'>
        <Logo className='logo' />
      </Link>
      <div className='header__options'>
        <Link className='link__option' to='/shop'>
          SHOP
        </Link>
        <Link className='link__option' to='/contact'>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
