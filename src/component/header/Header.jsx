import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/FirebaseUtils';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelectors';
import CartIcon from '../cart/CartIcon';
import CartDropdown from '../cartDropdown/CartDropdown';
import { HeaderContainer, LogoContainer, OptionContainer, OptionDiv, OptionLink } from './HeaderStyles';

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink className='link__option' to='/contact'>
          Contact
        </OptionLink>
        {currentUser ? (
          <OptionDiv className='link__option' onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionDiv>
        ) : (
          <OptionLink className='link__option' to='/signIn'>
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
