import React, { useState } from 'react';
import '../App.css';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { Container, Row} from 'react-bootstrap';


const MainPage = () => {
  const { t } = useTranslation();
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    // Tarkistetaan, onko tuote jo lisätty ostoskoriin
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.product_id === item.product_id);
    if (existingItemIndex !== -1) {
      // Jos tuote on jo lisätty ostoskoriin, päivitetään sen määrää
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      // Jos tuotetta ei ole vielä lisätty ostoskoriin, lisätään se sinne
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

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

        <Container>
          <Row>
            <ProductCard cartItems={cartItems} onAddToCart={handleAddToCart} />
          </Row>
        </Container>

       
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;
