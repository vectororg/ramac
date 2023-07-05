import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Profile from '../components/Profile';
import AddProfilePicture from '../components/AddProfilePictureComponent';
import ChangePassword from '../components/PasswordChangeComponent';
import { useAuth } from '../contexts/AuthProvider';
import ProfileImage from '../components/ProfileImage';

const Tili = () => {
  const [loggedIn, setLoggedIn] = useState(true); // Oletetaan, että käyttäjä on kirjautunut sisään
  const navigate = useNavigate();
  const auth = useAuth();



  // Jos käyttäjä ei ole kirjautunut sisään, ohjataan takaisin Etusivulle
/*   if (!loggedIn) {
    navigate('/');
    return null;
  } */

  useEffect(() => {
    const checkIsSignedIn = () => {
      if (!auth.signedIn) {
        navigate('/');
      }
    }

    checkIsSignedIn();
  
    return () => {
      
    }
  }, [])
  
  
  if (auth.signedIn) {
    return (
      <div>
        <Header />
        <Navbar />
        <Container>
          <Row className="my-4 gx-1">
            <Col xs={12} md={4} className="gx-2">
              <ProfileImage nick={auth.user.nick} />
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
  } else {
    return (<h3>Not authorized!</h3>) ;
  }  
};

export default Tili;
