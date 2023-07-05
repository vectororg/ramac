// Ostoskori.js
import React, { useState } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const Ostoskori = ({ lisaaOstoskoriin }) => {
  const [ostoskori, setOstoskori] = useState([]);

  const lisaaTuote = (nimi, hinta) => {
    const tuote = { nimi, hinta };
    setOstoskori([...ostoskori, tuote]);
  };

  const poistaTuote = (index) => {
    const uusiOstoskori = [...ostoskori];
    uusiOstoskori.splice(index, 1);
    setOstoskori(uusiOstoskori);
  };

  return (
    <Container>
      <h1>Ostoskori</h1>
      <Row>
        <Col>
          <ListGroup>
            {ostoskori.map((tuote, index) => (
              <ListGroup.Item key={index}>
                {tuote.nimi} - {tuote.hinta} €
                <button onClick={() => poistaTuote(index)}>Poista</button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <button onClick={() => lisaaOstoskoriin('Tuote 1', 19.99)}>Lisää tuote</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Ostoskori;
