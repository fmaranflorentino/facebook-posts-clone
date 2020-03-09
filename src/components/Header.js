import React from 'react';

import './Header.css';
import facebookLogo from '../assets/icons/facebook.svg';

function Header() {
  return (
    <header id="main">
      <img src={facebookLogo} alt="facebook logo"/>
    </header>
  )
}

export default Header;