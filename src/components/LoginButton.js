import React, { useState } from "react";
import LoginModal from "./LoginModal";
import { useTranslation } from 'react-i18next';

function LoginButton({ onLogin }) {
  const [showLogin, setShowLogin] = useState(false);
  const { t } = useTranslation();

  const handleLogin = () => {
    setShowLogin(true);
  };

  return (
    <div>
      {showLogin ? (
        <div className="login-overlay">
          <div className="login-window">
            <div className="login-header">
              <h2>Kirjaudu sisään</h2>
              <button className="close-btn" onClick={() => setShowLogin(false)}>
                X
              </button>
            </div>
            <div className="login-body">
              <LoginModal onClose={() => setShowLogin(false)} onLogin={onLogin} />
            </div>
          </div>
        </div>
      ) : (
        <button className='btn btn-outline-dark' onClick={handleLogin}>
          {t('login.login')}
        </button>
      )}
    </div>
  );
}

export default LoginButton;
