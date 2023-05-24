import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import LoginButton from '../components/LoginButton';
import logo from '../img/logo.png';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';




const Navbar = () => {
  const { t } = useTranslation();

  return (
    <>
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
      <Nav.Item>
      <Nav.Link href="/tili">{t('navbar.tili')}</Nav.Link>
      </Nav.Item>
    </Nav>
      <ul>
        <LanguageSwitcher />
     
        <li className='nav-item'>
              <LoginButton />
          </li>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;
