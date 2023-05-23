import React from 'react';
import '../App.css';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ShopItemGrid from '../components/ShopItemGrid'; // Import the ShopItemGrid component

const MainPage = () => {
  const { t } = useTranslation();

  const items = [
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 20 },
    { id: 3, name: "Item 3", price: 30 },
  ];

  return (
    <div>
      <Header />
      <Navbar />
      <Sidebar />

      <div className="main-container">
        {/* Other components or navigation */}
        <div>
          <h1>{t('mainPage.title')}</h1>
          <p>{t('mainPage.description')}</p>
        </div>

        {/* Include the ShopItemGrid component */}
        <ShopItemGrid items={items} />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
