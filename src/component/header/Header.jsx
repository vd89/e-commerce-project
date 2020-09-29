import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/FirebaseUtils';

const Header = ({ currentUser }) => {
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
        {currentUser ? (
          <div className='link__option' onClick={() => auth.signOut()}>
            <Redirect to='/' />
            SIGN OUT
          </div>
        ) : (
          <Link className='link__option' to='/signIn'>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
