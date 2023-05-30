import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function LoginButtonAndModal({ onClose, onLogin }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({ name: "", password: "" });
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Simuloi onnistunut kirjautuminen
    if (formData.name === "käyttäjänimi" && formData.password === "") {
      console.log("Login successful");
      onClose();
      onLogin(); // Kutsu onLogin-funktiota kirjautumisen yhteydessä

      setTimeout(() => {
        navigate("/tili");
      }, 500);
    } else {
      alert(t("loginFailed"));
      console.log("Login failed");
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      {t('login.login')}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{t("loginmodal.login")}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleFormSubmit}>
        <Modal.Body>
       
            <Form.Group controlId="name">
              <Form.Label>{t("loginmodal.username")}:</Form.Label>
              <Form.Control
                type="text"
                value={formData.name}
                onChange={(event) =>
                  setFormData({ ...formData, name: event.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>{t("loginmodal.password")}:</Form.Label>
              <Form.Control
                type="password"
                value={formData.password}
                onChange={(event) =>
                  setFormData({ ...formData, password: event.target.value })
                }
              />
            </Form.Group>
            
          
        </Modal.Body>
        <Modal.Footer>
            <Button variant="dark" type="submit">
              {t("loginmodal.login")}
            </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> 
          {/* <Button variant="primary">Understood</Button>*/}
        </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default LoginButtonAndModal;