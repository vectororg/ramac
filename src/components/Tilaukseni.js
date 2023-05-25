import React from 'react';
import { Table, Button } from 'react-bootstrap';

const Tilaukseni = ({ tilaukset }) => {
  const lataaLasku = (tilausID) => {
    // Logiikka laskun lataamiseen PDF-muodossa tilausID:n perusteella
    console.log('Lataa lasku tilausID:', tilausID);
  };

  return (
    <div>
      <h2>Tilaukseni</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Päivämäärä</th>
            <th>TilausID</th>
            <th>Muuta tietoa</th>
            <th>Hinta</th>
            <th>Lataa lasku</th>
          </tr>
        </thead>
        <tbody>
          {tilaukset.map((tilaus, index) => (
            <tr key={index}>
              <td>{tilaus.paivamaara}</td>
              <td>{tilaus.tilausID}</td>
              <td>{tilaus.info}</td>
              <td>{tilaus.hinta} €</td>
              <td>
                <Button onClick={() => lataaLasku(tilaus.tilausID)}>Lataa lasku PDF</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Tilaukseni;
