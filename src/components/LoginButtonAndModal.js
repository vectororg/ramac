import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';

function LoginButtonAndModal({ onLogin }) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ name: '', password: '' });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
const auth = useAuth()
  const handleFormSubmit = async (event) => {
    event.preventDefault();
      const loginString = `${formData.name}:${formData.password}`;
      const base64LoginString = btoa(loginString);
      fetch('https://nr.vector.fi:1891/ramac/rest/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${base64LoginString}`,
        },
      })
      .then(response => response.json())
      .then(data => {
        auth.login(data)
        localStorage.setItem("authorization", base64LoginString)
        setIsLoggedIn(true);
        console.log('Login successful');
        onLogin(); // Kutsu onLogin-funktiota kirjautumisen yhteydessä
        setTimeout(() => {
          navigate('/tili');
        }, 500);
      })
      .catch(error => console.error(error));



     
  };
  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {t('login.login')}
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{t('loginmodal.login')}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleFormSubmit}>
          <Modal.Body>
            <Form.Group controlId="name">
              <Form.Label>{t('loginmodal.username')}:</Form.Label>
              <Form.Control
                type="text"
                value={formData.name}
                onChange={(event) => setFormData({ ...formData, name: event.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>{t('loginmodal.password')}:</Form.Label>
              <Form.Control
                type="password"
                value={formData.password}
                onChange={(event) => setFormData({ ...formData, password: event.target.value })}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" type="submit">
              {t('loginmodal.login')}
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              {t('loginmodal.close')}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default LoginButtonAndModal;
