import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
import logo from '../img/logo.png';
import cart from '../img/cart.png';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    // Tarkista tallennettu kirjautumistila
    const storedLoggedIn = localStorage.getItem('loggedIn');
    if (storedLoggedIn === 'true') {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
    // Tallenna kirjautumistila
    localStorage.setItem('loggedIn', 'true');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    // Poista tallennettu kirjautumistila
    localStorage.removeItem('loggedIn');
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <Nav>
        <Nav.Item>
          <Nav.Link href="/hinnat">{t('navbar.hinnat')}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/info">{t('navbar.info')}</Nav.Link>
        </Nav.Item>
        {loggedIn && (
          <Nav.Item>
            <Nav.Link href="/tili">{t('navbar.tili')}</Nav.Link>
          </Nav.Item>
        )}
      </Nav>
      <ul>
        <LanguageSwitcher />
        {loggedIn ? (
          <li className='nav-item'>
            <LogoutButton onLogout={handleLogout} />
          </li>
        ) : (
          <li className='nav-item'>
            <LoginButton onLogin={handleLogin} />
          </li>
        )}
        <li className='cart'>
          <img src={cart} alt="Cart" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
