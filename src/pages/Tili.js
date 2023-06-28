import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Profile from '../components/Profile';
import AddProfilePicture from '../components/AddProfilePictureComponent';
import ChangePassword from '../components/PasswordChangeComponent';

const Tili = () => {
  const [loggedIn, setLoggedIn] = useState(true); // Oletetaan, että käyttäjä on kirjautunut sisään
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false);
    // Lisää uloskirjautumislogiikka tähän
    localStorage.removeItem('loggedIn');
    navigate('/'); // Ohjaa käyttäjä takaisin Etusivulle
  };

  // Jos käyttäjä ei ole kirjautunut sisään, ohjataan takaisin Etusivulle
  if (!loggedIn) {
    navigate('/');
    return null;
  }

  return (
    <div>
      <Header />
      <Navbar />
      <Container>
        <Row className="my-4 gx-1">
          <Col xs={12} md={4} className="gx-2">
            <AddProfilePicture />
          </Col>
          <Col xs={12} md={8} className="pb-4 mb-4">
            <Profile />
            <ChangePassword />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Tili;
