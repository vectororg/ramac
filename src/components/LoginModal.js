import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LoginWindow({ onClose, onLogin }) {
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
    <div className="login-window-wrapper">
      <div className="login-window">
        <div className="login-header">
          <h2>{t("loginmodal.login")}</h2>
          <button className="btn btn-outline-dark" onClick={onClose}>
            X
          </button>
        </div>
        <div className="login-body">
          <Form onSubmit={handleFormSubmit}>
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
            <Button variant="dark" type="submit">
              {t("loginmodal.login")}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default LoginWindow;
