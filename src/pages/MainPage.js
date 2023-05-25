import React from 'react';
import '../App.css';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import kivakuva from '../img/kivakuva.webp';
import ProductCard from '../components/ProductCard';
import MerchCard from '../components/MerchCard';
import { Container, Row, Col } from 'react-bootstrap';

const MainPage = () => {
  const { t } = useTranslation();
  const products = [
    {
      name: 'Tuote 1',
      description: 'Kuvaus tuotteesta 1',
      image: kivakuva,
    },
    {
      name: 'Tuote 2',
      description: 'Kuvaus tuotteesta 2',
      image: 'tuote2.jpg',
    },
    {
      name: 'Tuote 3',
      description: 'Kuvaus tuotteesta 3',
      image: 'tuote3.jpg',
    },
    {
      name: 'Tuote 4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'tuote4.jpg',
    },
    {
      name: 'Tuote 5',
      description: 'Kuvaus tuotteesta 5',
      image: 'tuote5.jpg',
    },
    {
      name: 'Tuote 6',
      description: 'Kuvaus tuotteesta 6',
      image: 'tuote6.jpg',
    },
    // Lisää tarvittavat tuotteet tähän
  ];

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
            {products.map((product, index) => (
              <Col key={index} xs={12} md={6} lg={4}>
                {index % 2 === 0 ? (
                  <ProductCard
                    product={product}
                    onAddToCart={(name, quantity) => handleAddToCart(name, quantity)}
                  />
                ) : (
                  <MerchCard
                    product={product}
                    onAddToCart={(name, quantity, variant) =>
                      handleAddToCartWithVariants(name, quantity, variant)
                    }
                  />
                )}
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
