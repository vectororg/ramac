import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const ChangePassword = () => {
  const { t } = useTranslation();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(0);
  const [passwordError, setPasswordError] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Tarkista salasanan pituus
    if (newPassword.length < 6) {
      setPasswordError('Salasanan tulee olla vähintään kuusi merkkiä pitkä.');
      return;
    }

    // Tässä voit käsitellä lomakkeen tiedot, esim. lähettää ne palvelimelle

    // Tyhjennä lomake
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setPasswordLength(0);
    setPasswordError('');
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6}>
          <h2>{t('changePassword.title')}</h2>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="currentPassword">
              <Form.Label>{t('changePassword.currentPasswordLabel')}</Form.Label>
              <Form.Control
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="newPassword">
              <Form.Label>{t('changePassword.newPasswordLabel')}</Form.Label>
              <Form.Control
                type="password"
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                  setPasswordLength(e.target.value.length);
                }}
              />
              {passwordLength > 0 && passwordLength < 6 && (
                <Form.Text className="text-danger">{passwordError}</Form.Text>
              )}
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>{t('changePassword.confirmPasswordLabel')}</Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {t('changePassword.submitButton')}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ChangePassword;
