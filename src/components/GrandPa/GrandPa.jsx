import React from "react";
import "./GrandPa.css";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";

const GrandPa = () => {
  const ring = "Diamond";
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <section className="flex gp-child">
        <Father ring={ring}></Father>
        <Uncle></Uncle>
        <Aunty ring={ring}></Aunty>
      </section>
    </div>
  );
};

export default GrandPa;
