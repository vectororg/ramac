import React, { useState } from "react";
import LoginModal from "./LoginModal";
import { useTranslation } from 'react-i18next';

function LoginButton() {
  const [showLogin, setShowLogin] = useState(false);
  const { t } = useTranslation();

  return (
    <div>
      <button className='btn btn-outline-dark' onClick={() => setShowLogin(true)}>{t('login.login')}</button>
      {showLogin && (
        <div className="login-overlay">
          <div className="login-window">
            <div className="login-header">
              <h2>Kirjaudu sisään</h2>
              <button className="close-btn" onClick={() => setShowLogin(false)}>
                X
              </button>
            </div>
            <div className="login-body">
              <LoginModal onClose={() => setShowLogin(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginButton;