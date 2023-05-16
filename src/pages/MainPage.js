import React from 'react';
import '../App.css';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const MainPage = () => {
    const { t } = useTranslation();
  
    return (
      <div>
        <Navbar />
        <Sidebar />
     
        <div className="main-container">
          {/* Other components or navigation */}
          <div>
            <h1>{t('mainPage.title')}</h1>
            <p>{t('mainPage.description')}</p>
          </div>
        </div>
      </div>

    );
  };
  
  export default MainPage;