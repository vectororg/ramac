import React from 'react';
import '../App.css';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import kivakuva from '../img/kivakuva.webp';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const MainPage = () => {
  const { t } = useTranslation();

  const handleAddToCart = (productName, quantity) => {
    console.log(`Lisää ${quantity} kpl tuotetta ${productName} ostoskoriin`);
    // Voit toteuttaa tässä toiminnallisuuden tuotteen lisäämiseksi ostoskoriin
  };

  const handleAddToCartWithVariants = (productName, quantity, variant) => {
    console.log(`Lisää ${quantity} kpl tuotetta ${productName} ostoskoriin`);
    console.log('Valittu variantti:', variant);
    // Voit toteuttaa tässä toiminnallisuuden tuotteen lisäämiseksi ostoskoriin varianttien kanssa
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
            <Col xs={4}>
              <ProductCard />
            </Col>
            <Col xs={4}>
              <ProductCard />
            </Col>
            <Col xs={4}>
              <ProductCard />
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <ProductCard />
            </Col>
            <Col xs={4}>
              <ProductCard />
            </Col>
            <Col xs={4}>
              <ProductCard />
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <ProductCard />
            </Col>
            <Col xs={4}>
              <ProductCard />
            </Col>
            <Col xs={4}>
              <ProductCard />
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;
