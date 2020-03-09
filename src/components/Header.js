import React from 'react';

import './Header.css';
import facebookLogo from '../assets/icons/facebook.svg';

function Header() {
  return (
    <header>
      <img src={facebookLogo} alt="facebook logo"/>
    </header>
  )
}

export default Header;