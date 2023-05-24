import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import LoginButton from '../components/LoginButton';



const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <ul>
        <LanguageSwitcher />
     
        <li className='nav-item'>
              <LoginButton />
          </li>
      </ul>
    </nav>
  );
};

export default Navbar;
