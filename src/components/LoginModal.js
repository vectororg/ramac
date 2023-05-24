import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Form, Button } from "react-bootstrap";

function LoginWindow({ onClose }) {
  const [formData, setFormData] = useState({ name: "", password: "" });
  const { t } = useTranslation();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    fetch("https://www.students.oamk.fi/~c2pima00/login.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // handle successful login
          alert(t("loginSuccessful"));
          console.log("Login successful");
        } else {
          // handle login error
          alert(t("loginFailed"));
          console.log(data.error);
        }
      })
      .catch((error) => console.error(error));
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
