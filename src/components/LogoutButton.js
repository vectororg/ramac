import React from "react";
import { useTranslation } from 'react-i18next';

function LogoutButton({ onLogout }) {
  const { t } = useTranslation();

  const handleLogout = () => {
    // Add any additional logout functionality here
    onLogout();
  };

  return (
    <button className='btn btn-outline-dark' onClick={handleLogout}>{t('login.logout')}</button>
  );
}

export default LogoutButton;
