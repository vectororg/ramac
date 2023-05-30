import React from 'react';
import '../App.css';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';



const Info = () => {
  const { t } = useTranslation();



  return (
    <div>
      <Header />
      <Navbar />
      

      <div className="main-container">
      Lue ensin ohjeet tarkasti ja siirry vasta sitten lipunmyyntijärjestelmään ostamaan lippuja.

Kokoa oma ryhmäsi. Mitä isompi ryhmä, sitä halvemmat ovat tietokonepaikkaliput. (ks. ryhmäalennukset). Valitkaa ryhmästä ryhmänjohtaja, joka hoitaa lippujen ostamisen ja koodien jakamisen ryhmälle. Huom! paikat varataan käyttäjätunnuksittain. Osta liput yhdellä käyttäjätunnuksella, jotta pääset varaamaan vierekkäiset paikat yhdellä kertaa. Voit ostaa samalle käyttäjätunnukselle myöhemmin lisää paikkoja, jolloin paikkojen valinta tapahtuu samaan aikaan. 
Rekisteröitykää lipunmyyntiin. Kaikkien jäsenten tulee rekisteröityä itse lipunmyyntijärjestelmään, syöttää tietonsa ja lisätä kuvansa.
Ryhmänjohtaja ostaa liput. Ryhmänjohtaja ostaa konepaikkaliput koko ryhmälle. Varmista, että konepaikkojen määrä on oikea, ennen kuin klikkaat Osta-painiketta.
Ryhmänjohtaja maksaa tilauksen. Osta-painikkeen klikkaamisen jälkeen järjestelmä tekee sinulle laskun. Voit maksaa laskun verkkopankkipainikkeen kautta. Verkkopankkipainikkeen kautta maksaessa maksu rekisteröityy järjestelmään saman tien ja pääset varaamaan konepaikat ilman odottelua.
Ryhmänjohtaja varaa paikat. Paikat voi varata, kun lasku on maksettu ja maksu on rekisteröitynyt järjestelmään. Ryhmänjohtaja varaa konepaikat koko ryhmälle. Valitse konepaikkasi joko pöydän päästä tai varatun paikan vierestä. Varaamme oikeuden tiivistää rivejä poistamalla ryhmien väliin tai sisään jätetyt tyhjät paikat ryhmiä/konepaikkoja liikuttamalla. Kun olet valinnut paikat, klikkaa "Lukitse valitut paikat" -painiketta, jolloin valitut paikat lukitaan. Tämän jälkeen et voi enää muuttaa valittuja paikkoja.
Ryhmänjohtaja luovuttaa paikat ryhmän jäsenille. Paikkojen varauksen jälkeen ryhmänjohtaja näkee varatut paikkansa sivulta Konepaikat → Omat paikkavaraukset. Tältä sivulta ryhmänjohtaja voi luovuttaa paikat ryhmän jäsenilleen syöttämällä ryhmän jäsenen sähköpostiosoitteen kenttään Sähköpostiosoite ja painamalla nappia Luovuta paikka käyttäjälle.
Asettakaa profiileihinne kasvokuva. Saat asetettua profiiliisi kuvan menemällä sivulle Profiili → Omat tiedot. Ota kuva painamalla nappia Ota kuva webkameralla. Voit myös ladata kuvan tietokoneeltasi valitsemalla Choose file (tai Valitse tiedosto) ja tämän jälkeen paina Lähetä kuva. Kuvasta tulee erottaa sinun kasvosi selkeästi. Pidä huoli, että jokaisella ryhmäläiselläsi on myös asetettuna kasvokuva itsestään profiiliinsa. Huomioi, että kuvan tulisi olla pystysuorassa.
Tulostakaa lipputositteenne. Jokainen ryhmän jäsen tulostaa oman lipputositteensa sen jälkeen kun hänelle on siirretty paikka. Muista ottaa tulostettu lipputosite mukaan tapahtumaan, varsinainen pääsylippu annetaan tapahtumaan tultaessa infotiskillä tulostettua lipputositetta vastaan!
Jos on jotain epäselvää lue usein kysytyt kysymykset ennen kuin kysyt asiaasi järjestäjiltä. Ohjeet paikalle saapumiseen ja sisääntuloon löytyvät Saapuminen tapahtumaan -oppaista. Jos vahvistusviesti ei tule perille, tarkista jäikö se roskapostisuodattimeen. Hotmail- ja Suomi24-palvelun sähköpostiosoitteet eivät toimi lipunmyyntijärjestelmässä.
      </div>
      
      <Footer />
    </div>
  );
};

export default Info;
