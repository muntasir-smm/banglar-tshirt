import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please add some products</p>;
  } else {
    message = (
      <div>
        <p>Boroloxxx</p>
        <p>
          <small>Thanks for giving your money</small>
        </p>
      </div>
    );
  }
  return (
    <div>
      <h2 className={cart.length === 1 ? "red" : "purple"}>Order Summary: {cart.length}</h2>

      <p className={`bold ${cart.length === 3 ? "yellow" : "blue"}`}>Something</p>
      {cart.length > 2 ? <span className="purple">Aro Kino</span> : <span>fokira</span>}
      {message}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;

/**
 * Conditional rendering:
 *
 * 1. use if or if else to set a variable that will contain an element, components.
 *
 * 2. Ternary operator:- condition? "for true":"for false"
 *3. Logical &&: (if condition is true then it will execute)
 * 4. Logical (or) ||: (if condition is false then it will execute)
 *
 */
