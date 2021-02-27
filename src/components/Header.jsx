import React from 'react';
import Cart from './Cart';
import MenuNavigation from './MenuNavigation';
function Header(props) {

  return (
    <header className="header-container">
      {window.location.pathname !== '/about' &&
        <>
          <MenuNavigation />
          <Cart />
        </>
      }
      {window.location.pathname === '/about' &&
        <>
          <MenuNavigation />
        </>
      }
    </header>
  );
}

export default Header;