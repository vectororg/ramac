import React from 'react';
import '../App.css';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ShopItemGrid from '../components/ShopItemGrid'; // Import the ShopItemGrid component
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


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
        
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default MainPage;
