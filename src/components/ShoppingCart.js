import React from "react";

const ShoppingCart = ({ cart, handleQuantityChange, handleRemoveItem }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((cartItem) => (
          <li key={cartItem.id}>
            {cartItem.name} - Quantity: {cartItem.quantity}
            <div className="quantity-controls">
              <button onClick={() => handleQuantityChange(cartItem, cartItem.quantity - 1)}>
                -
              </button>
              <button onClick={() => handleQuantityChange(cartItem, cartItem.quantity + 1)}>
                +
              </button>
              <button onClick={() => handleRemoveItem(cartItem)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
