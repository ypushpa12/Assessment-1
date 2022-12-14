
import React, { Fragment } from 'react';

function Header() {
    return (
      <Fragment>
      <div className="headercontainer">
      <header className="header">
      <input className="side-menu" type="checkbox" id="side-menu"/>
          <label className="hamb" for="side-menu"><span className="hamb-line"></span></label>
          <div className="logo headerlogo"><a href="">VENIA</a></div>
          <nav className="nav">
              <ul className="menu">
                  <li className="menuitem"><a href="">Home</a></li>
                  <li className="menuitem"><a href="products">Women</a> </li>
                  <li className="menuitem"><a href="">Men</a></li>
                  <li className="menuitem"><a href="">Electronics</a></li>
                  <li className="menuitem"><a href="">Jewellery</a></li>
              </ul>
          </nav>
          <div className="carticon">
          <a href="cart">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-icon-_rq"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
        </a>
      </div>
      </header>
      </div>
      </Fragment>
    )
  }
  export default Header;