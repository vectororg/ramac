import React from 'react';
import '../App.css';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';



const Info = () => {
  const { t } = useTranslation();



  return (
    <div>
      <Header />
      <Navbar />
      

      <div className="main-container">
    Täällä on kaikkee infoo
      </div>
      
      <Footer />
    </div>
  );
};

export default Info;
