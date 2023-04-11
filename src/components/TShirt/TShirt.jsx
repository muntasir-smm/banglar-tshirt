import React from "react";
import "./TShirt.css";

const TShirt = ({ tshirt, handleAddToCart }) => {
  //   console.log(tshirt);
  const { _id, index, price, picture, name, gender } = tshirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <h3>{name}</h3>
      <h4>Price: ${price}</h4>
      <button onClick={() => handleAddToCart(tshirt)} className="buy-btn">
        Buy Now
      </button>
    </div>
  );
};

export default TShirt;
