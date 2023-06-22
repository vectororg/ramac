import React, { useState } from 'react';

const RyhmatComponent = () => {
  const [ryhmanJasenet, setRyhmanJasenet] = useState([]);
  const [sisäänkirjautunutHenkilo, setSisaankirjautunutHenkilo] = useState('');

  const luoUusiRyhma = () => {
    // Luo uusi ryhmä
    const uusiRyhma = [
      { nimi: "Etunimi Sukunimi", nick: "Jäsen 1", email: "jasen1@example.com", puhelinnumero: "123456789" },
      { nimi: "Etunimi Sukunimi", nick: "Jäsen 2", email: "jasen2@example.com", puhelinnumero: "987654321" },
      { nimi: "Etunimi Sukunimi", nick: "Jäsen 3", email: "jasen3@example.com", puhelinnumero: "555555555" }
    ];
    // Aseta ryhmän jäsenet tilamuuttujaan
    setRyhmanJasenet(uusiRyhma);
  };

  const liityRyhmaan = () => {
    // Tarkista, että sisäänkirjautunut henkilö on valittu
    if (sisäänkirjautunutHenkilo) {
      // Generoi random #tag
      const tag = generateRandomTag();
      console.log(`${sisäänkirjautunutHenkilo.nick} liittyi ryhmään #${tag}`);
      // Voit tässä vaiheessa tehdä haluamasi toimenpiteet liittymisen kanssa
    }
  };

  const poistuRyhmasta = (index) => {
    // Poista jäsen ryhmästä
    const uudetJasenet = [...ryhmanJasenet];
    uudetJasenet.splice(index, 1);
    setRyhmanJasenet(uudetJasenet);
  };

  const generateRandomTag = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let tag = '';
    for (let i = 0; i < 6; i++) {
      tag += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return tag;
  };

  return (
    <div>
      <h2>Ryhmät</h2>
      <div>
        <button onClick={luoUusiRyhma}>Luo uusi ryhmä</button>
        <button onClick={liityRyhmaan}>Liity ryhmään</button>
      </div>
      {ryhmanJasenet.length > 0 && (
        <div>
          <h3>Ryhmän jäsenet:</h3>
          <table>
            <thead>
              <tr>
                <th>Nimi</th>
                <th>Nick</th>
                <th>Email</th>
                <th>Puhelinnumero</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {ryhmanJasenet.map((jasen, index) => (
                <tr key={index}>
                  <td className="box">{jasen.nimi}</td>
                  <td className="box">{jasen.nick}</td>
                  <td className="box">{jasen.email}</td>
                  <td className="box">{jasen.puhelinnumero}</td>
                  <td className="box">
                    {jasen === sisäänkirjautunutHenkilo && (
                      <button onClick={() => poistuRyhmasta(index)}>Poistu ryhmästä</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default RyhmatComponent;
