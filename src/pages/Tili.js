import React from 'react';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Profile from '../components/Profile';
import AddProfilePicture from '../components/AddProfilePicture';
import ChangePassword from '../components/PasswordChange';



const Tili = () => {



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