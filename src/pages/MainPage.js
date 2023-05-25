import React from 'react';
import '../App.css';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';

import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const MainPage = () => {
  const { t } = useTranslation();
  const products = [
    {
      name: "Tuote 1",
      description: "Kuvaus tuotteesta 1",
      image: "tuote1.jpg",
    },
    {
      name: "Tuote 2",
      description: "Kuvaus tuotteesta 2",
      image: "tuote2.jpg",
    },
    {
      name: "Tuote 3",
      description: "Kuvaus tuotteesta 3",
      image: "tuote3.jpg",
    },
    {
      name: "Tuote 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.   ",
      image: "tuote4.jpg",
    },
    {
      name: "Tuote 5",
      description: "Kuvaus tuotteesta 5",
      image: "tuote5.jpg",
    },
    {
      name: "Tuote 6",
      description: "Kuvaus tuotteesta 6",
      image: "tuote6.jpg",
    },
 
    // Lisää tarvittavat tuotteet tähän
  ];

  const handleAddToCart = (productName) => {
    // Tässä voit toteuttaa toiminnallisuuden tuotteen lisäämiseksi ostoskoriin
    console.log(`Lisää tuote ${productName} ostoskoriin`);
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
            {products.map((product, index) => (
              <Col key={index} xs={12} md={6} lg={4}>
                <ProductCard
                  product={product}
                  onAddToCart={() => handleAddToCart(product.name)}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;
