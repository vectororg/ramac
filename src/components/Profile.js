import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const UserProfile = () => {
  const { t } = useTranslation();
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

    // Here you can handle the form data, e.g., send it to the server

    // Clear the form
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
          <h2>{t('userProfile.title')}</h2>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="nick">
              <Form.Label>{t('userProfile.nickLabel')}</Form.Label>
              <Form.Control
                type="text"
                value={nick}
                onChange={(e) => setNick(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="firstName">
              <Form.Label>{t('userProfile.firstNameLabel')}</Form.Label>
              <Form.Control
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>{t('userProfile.lastNameLabel')}</Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="gender">
              <Form.Label>{t('userProfile.genderLabel')}</Form.Label>
              <Form.Control
                as="select"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">{t('userProfile.genderPlaceholder')}</option>
                <option value="male">{t('userProfile.genderMale')}</option>
                <option value="female">{t('userProfile.genderFemale')}</option>
                <option value="other">{t('userProfile.genderOther')}</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="phoneNumber">
              <Form.Label>{t('userProfile.phoneNumberLabel')}</Form.Label>
              <Form.Control
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="birthdate">
              <Form.Label>{t('userProfile.birthdateLabel')}</Form.Label>
              <Form.Control
                type="text"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>{t('userProfile.addressLabel')}</Form.Label>
              <Form.Control
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="postalCode">
              <Form.Label>{t('userProfile.postalCodeLabel')}</Form.Label>
              <Form.Control
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {t('userProfile.saveButton')}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
