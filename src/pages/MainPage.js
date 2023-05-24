import React from 'react';
import '../App.css';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';



const MainPage = () => {
  const { t } = useTranslation();



  return (
    <div>
      <Header />
      <Navbar />
      

      <div className="main-container">
        {/* Other components or navigation */}
        <div>
          <h1>{t('mainPage.title')}</h1>
          <p>{t('mainPage.description')}</p>
        </div>

        {/* Include the ShopItemGrid component */}
        

      </div>
      
      <Footer />
    </div>
  );
};

export default MainPage;
