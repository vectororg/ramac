import React, { useState, useEffect } from 'react';
import ShoppingCart from '../components/ShoppingCart';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OrderPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Haetaan tuotteiden tiedot localStoragesta
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const handleCheckout = () => {
    // Tähän voit toteuttaa tilauksen käsittelyn
    // Tässä esimerkissä vain merkitään checkoutDone todeksi ja tyhjennetään ostoskori
    localStorage.removeItem('cartItems'); // Poistetaan tuotteiden tiedot localStoragesta
    setCartItems([]); // Tyhjennetään cartItems-tila
  };

  const handleRemoveItem = (productId) => {
    // Tässä voit toteuttaa tuotteen poiston logiikan
    // Esimerkiksi poistaa tuotteen cartItems-tilasta ja päivittää localStoragea
    const updatedCartItems = cartItems.filter((item) => item.product_id !== productId);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    // Päivitä kappalemäärä välimuistissa
    const updatedCartItems = cartItems.map((item) =>
      item.product_id === productId ? { ...item, quantity: newQuantity } : item
    );
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <Header />
      <Navbar />
      {cartItems.length > 0 ? (
        <ShoppingCart
          cartItems={cartItems}
          onCheckout={handleCheckout}
          onRemoveItem={handleRemoveItem}
          onUpdateQuantity={handleUpdateQuantity} // Lisää onUpdateQuantity propseihin
        />
      ) : (
        <p>Your shopping cart is empty.</p>
      )}
      <Footer />
    </div>
  );
};

export default OrderPage;
