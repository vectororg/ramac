import React, { useState, useEffect } from "react";
import ShoppingCart from "./ShoppingCart";

const ShopItemGrid = ({ items }) => {
  const [cart, setCart] = useState([]);

  // Load cart data from localStorage when component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart data to localStorage when cart state changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (item, quantityToAdd = 1) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantityToAdd;
      setCart(updatedCart);
    } else {
      const newItem = { ...item, quantity: quantityToAdd };
      setCart([...cart, newItem]);
    }
  };

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity >= 0) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: newQuantity } : cartItem
      );

      setCart(updatedCart);
    }
  };

  const handleRemoveItem = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  return (
    <div>
      <h2>Shop Items</h2>
      <div className="item-grid">
        {items.map((item) => (
          <div key={item.id} className="item-card">
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <div className="item-actions">
            <button onClick={() => handleAddToCart(item, 1)}>Add to Cart</button>
          </div>
        </div>
        ))}
      </div>
      <ShoppingCart
        cart={cart}
        handleQuantityChange={handleQuantityChange}
        handleRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default ShopItemGrid;
