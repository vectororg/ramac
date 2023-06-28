import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const RegistrationModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!email || !password || !confirmPassword) {
        throw new Error('Täytä kaikki tarvittavat tiedot');
      }

      if (password !== confirmPassword) {
        throw new Error('Salasanat eivät täsmää');
      }

      const response = await fetch('https://nr.vector.fi:1891/ramac/rest/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.status === 200) {
        alert('Rekisteröityminen onnistui');
      } else if (response.status === 409) {
        const data = await response.json();
        throw new Error(data.msg);
      } else if (response.status === 422) {
        const data = await response.json();
        throw new Error(data.msg);
      } else if (response.status === 500) {
        throw new Error('Sisäinen palvelinvirhe');
      } else {
        throw new Error('Virhe rekisteröitymisessä');
      }
    } catch (error) {
      alert(`Virhe rekisteröitymisessä: ${error.message}`);
    } finally {
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setShowModal(false);
    }
  };

  return (
    <div>
      <Button onClick={() => setShowModal(true)}>Rekisteröidy</Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
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
            </Form.Group>
            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Vahvista salasana:</Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Rekisteröidy
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default RegistrationModal;
