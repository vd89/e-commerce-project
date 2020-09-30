import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/FirebaseUtils';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelecors';
import CartIcon from '../cart/CartIcon';
import CartDropdown from '../cartDropdown/CartDropdown';

const Header = ({ currentUser, hidden }) => {
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
            SIGN OUT
          </div>
        ) : (
          <Link className='link__option' to='/signIn'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
