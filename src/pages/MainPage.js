import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();
  
    return (
      <div>
        <h1>{t('mainPage.title')}</h1>
        <p>{t('mainPage.description')}</p>
      </div>
    );
  };
  
  export default MainPage;