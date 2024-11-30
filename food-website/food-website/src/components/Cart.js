import React from "react";
import "./styles.css";

const Cart = ({ cart, removeFromCart }) => {
  // Calculate total amount
  const totalAmount = cart.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', '')); // Remove $ sign and convert to number
    return total + price;
  }, 0).toFixed(2); // Fixed to 2 decimal places

  return (
    <main className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in your cart yet!</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                </div>
                <button onClick={() => removeFromCart(index)} className="delete-button">
                  🗑️ {/* You can replace this with an icon from a library */}
                </button>
              </li>
            ))}
          </ul>
          <div className="total-amount">
            <h3>Total Amount: ${totalAmount}</h3>
          </div>
        </>
      )}
    </main>
  );
};

export default Cart;