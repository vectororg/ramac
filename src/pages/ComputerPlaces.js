import React from 'react';
import '../App.css';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Groups from '../components/Groups';



const ComputerPlaces = () => {
  const { t } = useTranslation();



  return (
    <div>
      <Header />
      <Navbar />
      

      <div className="main-container">
    <Groups />
      </div>
      
      <Footer />
    </div>
  );
};

export default ComputerPlaces;
