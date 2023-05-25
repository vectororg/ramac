import React from 'react';
import '../App.css';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Basket from '../components/Basket';
import Tilaukseni from '../components/Tilaukseni';



const Order = () => {
    const { t } = useTranslation();
  
    const tilaukset = [
      {
        tilausId: 1,
        paivamaara: "2023-05-25",
        info: "Tilaus 1",
        hinta: 19.99,
        laskuPdfUrl: "https://example.com/lasku1.pdf",
      },
      {
        tilausId: 2,
        paivamaara: "2023-05-26",
        info: "Tilaus 2",
        hinta: 29.99,
        laskuPdfUrl: "https://example.com/lasku2.pdf",
      },
      // Lisää tarvittavat tilaukset tähän
    ];
  
    return (
      <div>
        <Header />
        <Navbar />
  
        <Basket />
        <Tilaukseni tilaukset={tilaukset} />
        <Footer />
      </div>
    );
  };
export default Order;
