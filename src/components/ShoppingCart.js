import React from 'react';
import { Table, Button, ButtonGroup } from 'react-bootstrap';

const ShoppingCart = ({ cartItems, onCheckout, onRemoveItem, onUpdateQuantity }) => {
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleRemoveItem = (productId) => {
    // Kutsu parent-komponentista saatu onRemoveItem-funktio ja lähetä poistettavan tuotteen id
    onRemoveItem(productId);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    // Päivitä tuotteen määrä välimuistissa
    const updatedCartItems = cartItems.map((item) => {
      if (item.product_id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    // Päivitä välimuisti
    localStorage.setItem('selectedProduct', JSON.stringify(updatedCartItems));

    // Kutsu parent-komponentista saatu onUpdateQuantity-funktio ja lähetä tuotteen id ja uusi kappalemäärä
    onUpdateQuantity(productId, newQuantity);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.product_id}>
                  <td>{item.product_name}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>
                    <ButtonGroup>
                      <Button variant="secondary" onClick={() => handleUpdateQuantity(item.product_id, item.quantity - 1)}>-</Button>
                      <Button variant="light" disabled>{item.quantity}</Button>
                      <Button variant="secondary" onClick={() => handleUpdateQuantity(item.product_id, item.quantity + 1)}>+</Button>
                    </ButtonGroup>
                  </td>
                  <td>{item.price * item.quantity}</td>
                  <td>
                    <Button variant="danger" onClick={() => handleRemoveItem(item.product_id)}>
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <p>Total: {calculateTotalPrice()}</p>
          <Button variant="primary" onClick={onCheckout}>
            Checkout
          </Button>
          
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
