import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <ul>
        <LanguageSwitcher />
        <li><a href="#">{t('navbar.button1')}</a></li>
        <li><a href="#">{t('navbar.button2')}</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
