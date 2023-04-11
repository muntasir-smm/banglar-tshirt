import React, { useContext } from "react";
import { RingContext } from "../GrandPa/GrandPa";

const Brother = () => {
  const angtii = useContext(RingContext);
  return (
    <div>
      <h2>Brothers</h2>
      <p>{angtii}</p>
    </div>
  );
};

export default Brother;
