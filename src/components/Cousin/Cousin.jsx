import React from "react";
import Friend from "../Friend/Friend";

const Cousin = ({ childern, hasFriend, ring }) => {
  return (
    <div>
      <h2>Cousin</h2>
      <p>
        <small>{childern}</small>
      </p>
      {hasFriend && <Friend ring={ring}></Friend>}
    </div>
  );
};

export default Cousin;
