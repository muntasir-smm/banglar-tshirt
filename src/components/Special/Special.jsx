import React, { useContext } from "react";
import { RingContext } from "../GrandPa/GrandPa";

const Special = ({ ring }) => {
  const angti = useContext(RingContext);
  return (
    <div>
      <h1>Special one!</h1>
      <h3>{angti}</h3>
    </div>
  );
};

export default Special;
