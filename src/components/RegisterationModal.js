import React, { useState } from 'react';
import { Button, Modal, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const RegistrationModal = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError(null);
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (!email || !password || !confirmPassword) {
        throw new Error('Tarkista syöttämäsi tiedot.');
      }

      if (password.length < 6) {
        throw new Error('Salasanan tulee olla vähintään 6 merkkiä pitkä.');
      }

      if (password !== confirmPassword) {
        throw new Error('Salasanat eivät täsmää.');
      }

      // Suorita rekisteröintitoimet tässä

      setIsLoggedIn(true); // Aseta isLoggedIn-tila arvoksi true

      navigate('/tili');

      handleModalClose();
    } catch (error) {
      setError(error.message);
    }
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
              <Form.Control
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
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
