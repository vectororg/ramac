import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const UserProfile = () => {
  const [nick, setNick] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Tässä voit käsitellä lomakkeen tiedot, esim. lähettää ne palvelimelle

    // Tyhjennä lomake
    setNick('');
    setFirstName('');
    setLastName('');
    setGender('');
    setPhoneNumber('');
    setBirthdate('');
    setAddress('');
    setPostalCode('');
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6}>
          <h2>Käyttäjäprofiili</h2>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="nick">
              <Form.Label>Nick:</Form.Label>
              <Form.Control
                type="text"
                value={nick}
                onChange={(e) => setNick(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="firstName">
              <Form.Label>Etunimi:</Form.Label>
              <Form.Control
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Sukunimi:</Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="gender">
              <Form.Label>Sukupuoli:</Form.Label>
              <Form.Control
                as="select"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Valitse sukupuoli</option>
                <option value="male">Mies</option>
                <option value="female">Nainen</option>
                <option value="other">Muu</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="phoneNumber">
              <Form.Label>Puhelinnumero:</Form.Label>
              <Form.Control
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="birthdate">
              <Form.Label>Syntymäaika:</Form.Label>
              <Form.Control
                type="text"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Lähiosoite:</Form.Label>
              <Form.Control
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="postalCode">
              <Form.Label>Postinumero:</Form.Label>
              <Form.Control
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Tallenna
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
