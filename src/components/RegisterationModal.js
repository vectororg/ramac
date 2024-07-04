import React, { useState } from 'react';
import { Button, Modal, Form, Alert } from 'react-bootstrap';

const RegistrationModal = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!login || !email || !password || !confirmPassword) {
        throw new Error('Tarkista syöttämäsi tiedot.');
      }

      if (login.length < 3) {
        throw new Error('Käyttäjänimen tulee olla vähintään 3 merkkiä pitkä.');
      }

      if (password.length < 6) {
        throw new Error('Salasanan tulee olla vähintään 6 merkkiä pitkä.');
      }

      if (password !== confirmPassword) {
        throw new Error('Salasanat eivät täsmää.');
      }

      const response = await fetch('https://nr.vector.fi:1891/ramac/rest/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "birthyear": 1987,
          "phone": "0461234568",
          "lastname" : "TestUserLastname2",
          password,
          "firstnames":"TestUserFirstname2",
          login,
          "zip" : "12355",
          "nick" : "TestUser2",
          email,
          "address" : "Example Street 1",
          "city":"Example Town"
            
        }),
      }).catch((error) => {
        console.log('Virhe fetch-pyynnössä:', error);
      });

      if (response.ok) {
        setIsLoggedIn(true);
        handleModalClose();
      } else {
        throw new Error('Rekisteröinti epäonnistui.');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleUsernameChange = (e) => {
    setLogin(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleModalClose = () => {
    setLogin('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError(null);
    setShowModal(false);
  };

  if (isLoggedIn) {
    return null;
  }

  return (
    <div>
      <Button onClick={() => setShowModal(true)}>Rekisteröidy</Button>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rekisteröidy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label>Käyttäjänimi:</Form.Label>
              <Form.Control type="text" value={login} onChange={handleUsernameChange} />
              {login.length < 3 && (
                <Form.Text className="text-danger">Käyttäjänimen tulee olla vähintään 3 merkkiä pitkä.</Form.Text>
              )}
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Sähköposti:</Form.Label>
              <Form.Control type="email" value={email} onChange={handleEmailChange} />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Salasana:</Form.Label>
              <Form.Control type="password" value={password} onChange={handlePasswordChange} />
              {password.length < 6 && (
                <Form.Text className="text-danger">Salasanan tulee olla vähintään 6 merkkiä pitkä.</Form.Text>
              )}
            </Form.Group>
            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Vahvista salasana:</Form.Label>
              <Form.Control type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
              {password !== confirmPassword && (
                <Form.Text className="text-danger">Salasanat eivät täsmää.</Form.Text>
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              Rekisteröidy
            </Button>
          </Form>
          {error && <Alert variant="danger">{error}</Alert>}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default RegistrationModal;
